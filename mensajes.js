// mensajes.js
export const MENSAJES = {
  INFO_VIP: `
Hola gatito 😘💖
Gracias por escribirme.

El precio para unirte a mi 💎 GRUPO VIP 💎 es de S/ 75 Soles 🔥

✨ ¿QUÉ ENCONTRARÁS EN MI VIP?
🔥 Contenido exclusivo súper sensual, erótico y desinhibido.
💋 Fotos y videos privados que no subo a ningún otro lado.
🥰 Una faceta mucho más íntima solo para ti.
😏 Actualizaciones constantes, ¡siempre subo más!

Te va a encantar, es contenido exclusivo y muy intenso 💦💕

💳 MÉTODOS DE PAGO:
🟣 YAPE: Escanea el QR de la imagen (A nombre de Lady)
🏦 BCP Soles: 19395767231074
🔄 CCI: 00219319576723107415
🌐 PayPal: Ladybabe417

📌 ¿CÓMO TE UNES?
1️⃣ Realizas el pago de los S/ 75.
2️⃣ Me envías la captura del comprobante por aquí.
3️⃣ Yo lo verifico y te doy acceso inmediato 😍

📖 ¿QUIERES VER QUÉ MÁS OFREZCO?
Escribe la palabra CATALOGO y te mandaré mi lista de servicios extras 🔥

Cuando gustes, mándame la captura 💖
`.trim(),

  CATALOGO: `
📸 MI CATÁLOGO DE SERVICIOS 📸

Aquí tienes todo lo que ofrezco además del VIP, amor... 😈🔥
(Si te interesa algo de las imágenes, solo dímelo y lo coordinamos).
`.trim(),

  RECIBIDO_CLIENTE: () => `
Perfecto amor 😘💖
Ya recibí tu comprobante.

🕐 Estoy validando tu pago ahora mismo.
En un momento te confirmo y te doy el link de acceso a mi VIP 🔥😈

Gracias por tu paciencia 💕
`.trim(),

  APROBADO: (link) => `
😍🔥 PAGO CONFIRMADO 🔥😍

Bienvenido amor 💎💖
Tu acceso al VIP ya está listo.

👉 Únete tocando este enlace:
${link}

Disfruta mucho de todo mi contenido 😈💦
Cualquier cosita me escribes 💕
`.trim(),

  RECHAZADO: () => `
Hola amor 💕
Revisé tu pago pero aún no me figura confirmado en mis cuentas 😥

Puede ser por esto:
❌ El pago aún está en proceso por el banco.
❌ La captura se ve muy borrosa.
❌ El monto no coincide con el precio.

Por favor, revisa y envíame nuevamente el comprobante 🙏
Cualquier duda dime y lo vemos juntos 💖
`.trim(),

  SOPORTE: () => `
Hola amor 💖
Cuéntame qué pasó y te ayudo enseguida 😘
Estoy aquí para ti.
`.trim(),

  YA_PENDIENTE_CLIENTE: () => `
Amor 💕
Tu pago ya está en revisión 🕐
Dame un momento y en breve te confirmo 😘
`.trim(),

  ADMIN_PANEL: () => `
👑 MODO ADMIN ACTIVO 👑

✅ Aquí recibirás las ALERTAS DE PAGO con:
• El ID del usuario.
• El resumen inteligente de la IA.
• La foto del comprobante.
• Los botones de Aprobar/Rechazar.

📌 (Para probar si funciona, escríbete a ti mismo desde otra cuenta).
`.trim(),

  YA_GESTIONADO_ADMIN: () => `Este pago ya fue gestionado por otro administrador ✅`.trim(),
};