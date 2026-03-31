# 🤖 Bot de Pagos Automatizado con Telegram

<p align="center">
  <img src="https://img.shields.io/badge/Telegram-Bot-blue?style=for-the-badge&logo=telegram">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=for-the-badge&logo=node.js">
  <img src="https://img.shields.io/badge/IA-Análisis_de_Imágenes-orange?style=for-the-badge">
</p>

<p align="center">
  <b>Bot avanzado desarrollado en Node.js para automatizar ventas, validar pagos mediante capturas de pantalla y gestionar el acceso a contenido privado de forma eficiente.</b>
</p>

---

## 🚀 Descripción

Este ecosistema de bots permite automatizar un ciclo completo de ventas digitales dentro de Telegram. Desde la atención inicial al cliente hasta la entrega del producto (acceso a canales o grupos) tras la validación manual o asistida de comprobantes de pago (Yape, Plin, transferencias).

---

## ✨ Funcionalidades

* 🛒 **Ventas Automatizadas:** Flujo conversacional tipo asistente con respuestas instantáneas.
* 💳 **Validación de Pagos:** Recepción de capturas de pantalla y procesamiento de evidencia.
* 🔔 **Panel de Administración:** El bot administrador recibe la evidencia con botones interactivos:
    * ✅ **Aprobar:** Genera el acceso automático al canal.
    * ❌ **Rechazar:** Notifica al cliente y solicita corrección.
* 🔐 **Control de Acceso:** Gestión de invitaciones y permisos a canales privados.
* 🤖 **Arquitectura Dual:** Separación de procesos entre el **Bot de Ventas** y el **Bot de Control**.
* 🎨 **Marketing Integrado:** Envío programado de stickers, imágenes y recordatorios para mejorar la conversión.

---

## 🧠 Flujo del Sistema

```mermaid
graph TD
    A[Cliente] -->|Inicia compra| B(Bot de Ventas)
    B -->|Envía captura de pago| C{Bot Administrador}
    C -->|Revisión Manual/IA| D{Decisión}
    D -->|Aprobar| E[Acceso a Canal Privado]
    D -->|Rechazar| F[Notificación de error al Cliente]
    E -->|Post-venta| G[Mensajes Programados/Stickers]


🛠️ Tecnologías
Runtime: Node.js

Librería Principal: node-telegram-bot-api

Gestión de Variables: dotenv

Lógica de Flujo: Asincronía avanzada en JavaScript.

🔐 Configuración
1. Variables de Entorno
Crea un archivo .env en la raíz del proyecto y completa tus credenciales:

Fragmento de código
TELEGRAM_TOKEN=tu_token_bot_ventas
ADMIN_BOT_TOKEN=tu_token_bot_admin
API_ID=tu_api_id
API_HASH=tu_api_hash
ADMIN_CHAT_ID=tu_id_personal_admin
CANAL_PRIVADO_ID=id_de_tu_canal
Nota: Puedes obtener los tokens con @BotFather y tus credenciales API en my.telegram.org.

🚀 Instalación y Uso
Clonar el repositorio:

Bash
git clone [https://github.com/michaelGuerraQ/bot-pagos-telegram.git](https://github.com/michaelGuerraQ/bot-pagos-telegram.git)
cd bot-pagos-telegram
Instalar dependencias:

Bash
npm install
Ejecutar el bot:

Bash
node index.js
🎨 Ejemplos de Implementación
Envío de Multimedia
JavaScript
// Ejemplo de confirmación visual
bot.sendPhoto(chatId, '[https://i.imgur.com/imagen.jpg](https://i.imgur.com/imagen.jpg)', {
  caption: '¡Gracias por tu compra! Tu pago está siendo procesado.'
});

bot.sendSticker(chatId, '[https://i.imgur.com/sticker.webp](https://i.imgur.com/sticker.webp)');
Mensajes Programados (Seguimiento)
JavaScript
// Recordatorio automático después de 1 minuto
setTimeout(() => {
  bot.sendMessage(chatId, '🔔 Recordatorio: Tu acceso al canal VIP ya está activo.');
}, 60000);
👨‍💻 Autor
Michael Stuward Guerra Quispe

Github: @michaelGuerraQ

Telegram: Contacto
