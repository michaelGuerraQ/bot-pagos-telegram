// index.js
import 'dotenv/config';
import { TelegramClient } from "telegram";
import { StoreSession } from "telegram/sessions/index.js";
import { NewMessage } from "telegram/events/index.js";
import { Telegraf, Markup } from "telegraf";
import { GoogleGenAI } from "@google/genai";
import input from "input";
import fs from "fs"; 
import { MENSAJES } from "./mensajes.js";

// ==========================================
// ⚙️ VALIDACIÓN DE ENTORNO
// ==========================================
const API_ID = parseInt(process.env.API_ID);
const API_HASH = process.env.API_HASH;
const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_ID = parseInt(process.env.ADMIN_ID);
const LINK_VIP = process.env.LINK_VIP;
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!API_ID || !API_HASH || !BOT_TOKEN || !ADMIN_ID || !GEMINI_API_KEY) {
    console.error("❌ Faltan datos en el archivo .env.");
    process.exit(1);
}

// ==========================================
// 🗄️ SISTEMA DE BASE DE DATOS (JSON) BLINDADO
// ==========================================
const DB_FILE = './base_datos.json';

if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({ usuarios: {} }, null, 2));
}

function obtenerEstado(userId) {
    try {
        const data = fs.readFileSync(DB_FILE, 'utf-8');
        const db = JSON.parse(data);
        return db.usuarios ? db.usuarios[userId] : undefined;
    } catch (error) {
        // Si el archivo está dañado o vacío, lo repara automáticamente
        fs.writeFileSync(DB_FILE, JSON.stringify({ usuarios: {} }, null, 2));
        return undefined;
    }
}

function guardarEstado(userId, estado) {
    try {
        let db = { usuarios: {} };
        const data = fs.readFileSync(DB_FILE, 'utf-8');
        if (data.trim() !== "") {
            db = JSON.parse(data);
        }
        if (!db.usuarios) db.usuarios = {};
        
        db.usuarios[userId] = estado;
        fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
    } catch (error) {
        // Si hay error al leer, crea uno nuevo y salva el dato
        const db = { usuarios: { [userId]: estado } };
        fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
    }
}

// ==========================================
// 🛠 INICIALIZACIÓN
// ==========================================
const storeSession = new StoreSession("sesion_userbot");
const userbot = new TelegramClient(storeSession, API_ID, API_HASH, { connectionRetries: 5 });
const adminBot = new Telegraf(BOT_TOKEN);
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const entidadesSeguras = new Map();

async function iniciarSistema() {
    console.log("🚀 Iniciando Bot Panel Admin...");
    adminBot.launch();
    
    console.log("🚀 Iniciando Userbot (Cuenta Personal)...");
    await userbot.connect();

    if (!await userbot.checkAuthorization()) {
        console.log("\n⚠️ No hay sesión guardada. Vamos a iniciar sesión:\n");
        await userbot.start({
            phoneNumber: async () => await input.text("📱 Ingresa tu número de teléfono con código de país (ej. +51987654321): "),
            password: async () => await input.text("🔑 Ingresa tu contraseña de verificación en 2 pasos (si no tienes, da Enter): "),
            phoneCode: async () => await input.text("💬 Ingresa el código que Telegram te acaba de enviar: "),
            onError: (err) => console.error("❌ Error al iniciar sesión:", err),
        });
        console.log("✅ ¡Cuenta personal vinculada exitosamente!");
        userbot.session.save();
    } else {
        console.log("✅ Sesión cargada. Userbot listo para interactuar.");
    }

    // ==========================================
    // 📩 EVENTOS DEL USERBOT (CUENTA PERSONAL)
    // ==========================================
    userbot.addEventHandler(async (event) => {
        const message = event.message;
        if (!message.isPrivate || message.out) return;

        const sender = await message.getSender();
        if (!sender || sender.bot) return; 

        const senderIdStr = sender.id.toString();
        if (senderIdStr === ADMIN_ID.toString()) return;

        const estado = obtenerEstado(senderIdStr);
        if (estado === 'vip') return; // Ignoramos a los que ya son VIP

        entidadesSeguras.set(senderIdStr, sender);

        // 📸 DETECTOR DE PALABRA "CATALOGO" (ENVÍA MÚLTIPLES FOTOS)
        const textoCliente = message.message?.toLowerCase() || "";
        if (textoCliente.includes("catalogo") || textoCliente.includes("catálogo")) {
            const carpetaCatalogo = './catalogo';
            
            if (fs.existsSync(carpetaCatalogo)) {
                // Lee todos los archivos de la carpeta catalogo
                const fotosCatalogo = fs.readdirSync(carpetaCatalogo)
                    .filter(archivo => archivo.endsWith('.jpg') || archivo.endsWith('.png') || archivo.endsWith('.jpeg'))
                    .map(archivo => `${carpetaCatalogo}/${archivo}`);

                if (fotosCatalogo.length > 0) {
                    console.log(`📸 Enviando catálogo de ${fotosCatalogo.length} fotos a ${senderIdStr}...`);
                    await userbot.sendMessage(sender, { 
                        message: MENSAJES.CATALOGO,
                        file: fotosCatalogo // Esto envía las 6 fotos como un Álbum
                    });
                } else {
                    await userbot.sendMessage(sender, { message: MENSAJES.CATALOGO + "\n\n*(Aviso interno: La carpeta 'catalogo' está vacía)*" });
                }
            } else {
                await userbot.sendMessage(sender, { message: MENSAJES.CATALOGO + "\n\n*(Aviso interno: Falta crear la carpeta 'catalogo' en tu PC)*" });
            }
            return; // Detenemos aquí para que no mande el Yape
        }

        // 1️⃣ NUEVO CLIENTE (Le mandamos el Yape y las instrucciones)
        if (!estado) {
            let opcionesVip = { message: MENSAJES.INFO_VIP };
            if (fs.existsSync('./yape.jpg')) {
                opcionesVip.file = './yape.jpg';
            }
            await userbot.sendMessage(sender, opcionesVip);
            guardarEstado(senderIdStr, 'esperando_pago');
            return;
        }

        // 2️⃣ CLIENTE MANDANDO COMPROBANTE
        if (estado === 'esperando_pago') {
            if (message.photo || message.document) {
                await userbot.sendMessage(sender, { message: MENSAJES.RECIBIDO_CLIENTE() });
                guardarEstado(senderIdStr, 'en_revision');

                console.log(`📥 Descargando comprobante de ${senderIdStr}...`);
                const bufferMedia = await userbot.downloadMedia(message);

                let infoExtraida = "⚠️ *Aviso:* No se pudo analizar con IA. Revisa la imagen manualmente.";
                
                try {
                    console.log("🤖 Analizando comprobante con Google AI...");
                    const response = await ai.models.generateContent({
                        model: "gemini-2.5-flash",
                        contents: [
                            { inlineData: { mimeType: "image/jpeg", data: bufferMedia.toString("base64") } },
                            { text: "Analiza este comprobante de pago. Extrae brevemente en formato lista: 1. Monto transferido, 2. Fecha y hora, 3. Banco o método de pago, 4. Número de referencia. Si la imagen NO es un comprobante, di solamente: '⚠️ ALERTA: La imagen no parece ser un comprobante de pago'." }
                        ]
                    });
                    infoExtraida = `🤖 *Resumen de IA:*\n${response.text}`;
                } catch (error) {
                    console.log("❌ Error con la IA:", error.message);
                }

                await adminBot.telegram.sendDocument(ADMIN_ID, { 
                    source: bufferMedia, 
                    filename: `comprobante_${senderIdStr}.jpg` 
                }, {
                    caption: `🔔 *NUEVO PAGO RECIBIDO*\n👤 ID Cliente: \`${senderIdStr}\`\n\n${infoExtraida}\n\n👇 *Decisión:*`,
                    parse_mode: 'Markdown',
                    ...Markup.inlineKeyboard([
                        Markup.button.callback('✅ Aprobar', `aprobar_${senderIdStr}`),
                        Markup.button.callback('❌ Rechazar', `rechazar_${senderIdStr}`)
                    ])
                });
            } else {
                await userbot.sendMessage(sender, { message: "Amor, por favor envíame la foto o captura del comprobante para poder revisarlo 🙏💕" });
            }
        } 
        // 3️⃣ CLIENTE INTENSO
        else if (estado === 'en_revision') {
            await userbot.sendMessage(sender, { message: MENSAJES.YA_PENDIENTE_CLIENTE() });
        }
    }, new NewMessage({}));
}

// ==========================================
// 🕹 EVENTOS DEL PANEL ADMIN
// ==========================================
adminBot.command('start', (ctx) => {
    if (ctx.from.id === ADMIN_ID) ctx.reply(MENSAJES.ADMIN_PANEL(), { parse_mode: 'Markdown' });
});

adminBot.action(/aprobar_(.+)/, async (ctx) => {
    const userIdStr = ctx.match[1];
    if (obtenerEstado(userIdStr) !== 'en_revision') return ctx.answerCbQuery(MENSAJES.YA_GESTIONADO_ADMIN(), { show_alert: true });

    const cliente = entidadesSeguras.get(userIdStr) || userIdStr;
    try {
        await userbot.sendMessage(cliente, { message: MENSAJES.APROBADO(LINK_VIP) });
        guardarEstado(userIdStr, 'vip'); 
        await ctx.editMessageCaption(`✅ *PAGO APROBADO*\nAcceso enviado al usuario \`${userIdStr}\`.`, { parse_mode: 'Markdown' });
        await ctx.answerCbQuery("Pago aprobado.");
    } catch (error) {
        console.error("❌ Error al enviar el link VIP:", error);
        await ctx.answerCbQuery("Error enviando el mensaje.", { show_alert: true });
    }
});

adminBot.action(/rechazar_(.+)/, async (ctx) => {
    const userIdStr = ctx.match[1];
    if (obtenerEstado(userIdStr) !== 'en_revision') return ctx.answerCbQuery(MENSAJES.YA_GESTIONADO_ADMIN(), { show_alert: true });

    const cliente = entidadesSeguras.get(userIdStr) || userIdStr;
    try {
        await userbot.sendMessage(cliente, { message: MENSAJES.RECHAZADO() });
        guardarEstado(userIdStr, 'esperando_pago'); 
        await ctx.editMessageCaption(`❌ *PAGO RECHAZADO*\nSe le solicitó re-enviar comprobante al usuario \`${userIdStr}\`.`, { parse_mode: 'Markdown' });
        await ctx.answerCbQuery("Pago rechazado.");
    } catch (error) {
        console.error("❌ Error al enviar el rechazo:", error);
        await ctx.answerCbQuery("Error enviando el mensaje.", { show_alert: true });
    }
});

process.on('uncaughtException', (err) => console.error("Error global:", err));
process.on('unhandledRejection', (err) => console.error("Promesa rechazada:", err));

iniciarSistema().catch(console.error);
process.once('SIGINT', () => adminBot.stop('SIGINT'));
process.once('SIGTERM', () => adminBot.stop('SIGTERM'));