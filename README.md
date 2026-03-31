# 🤖 Bot de Pagos Automatizado con Telegram  

![Telegram](https://img.shields.io/badge/Telegram-Bot-blue?logo=telegram)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![IA](https://img.shields.io/badge/IA-Análisis_de_Imágenes-orange)
![Estado](https://img.shields.io/badge/Estado-Activo-brightgreen)

---

## 🚀 Descripción

Bot avanzado desarrollado en **Node.js** que automatiza ventas, valida pagos mediante imágenes y gestiona el acceso a contenido privado en Telegram en tiempo real.

---

## ✨ Funcionalidades

- 🛒 **Sistema de ventas automatizado**
  - Flujo conversacional tipo asistente
  - Atención automática a clientes

- 💳 **Validación de pagos por imagen**
  - El cliente envía captura (Yape, transferencias, etc.)
  - El bot procesa la evidencia

- 🔔 **Notificación al administrador**
  - Se envía la imagen del pago automáticamente
  - Incluye botones:
    - ✅ Aprobar
    - ❌ Rechazar

- 🔐 **Control de acceso**
  - ✔ Si se aprueba → acceso a canal privado
  - ❌ Si se rechaza → se notifica al cliente

- 🤖 **Arquitectura de doble bot**
  - Bot cliente (ventas)
  - Bot administrador (validación)

- 🎨 **Automatización de contenido**
  - Envío de imágenes
  - Envío de stickers
  - Mensajes automáticos programados

---

## 🧠 Flujo del sistema

Cliente → Bot de Ventas → Envío de pago (imagen)  
↓  
Bot Administrador  
↓  
(Aprobar / Rechazar)  
↓  
Acceso o rechazo automático  

---

## 🛠️ Tecnologías

- Node.js  
- Telegram Bot API  
- node-telegram-bot-api  
- dotenv  
- IA para análisis de imágenes  

---

## 🔐 Configuración

Crear archivo `.env` en la raíz del proyecto:

```env
TELEGRAM_TOKEN=tu_token
ADMIN_BOT_TOKEN=tu_token_admin
API_ID=tu_api_id
API_HASH=tu_api_hash
ADMIN_CHAT_ID=tu_id_admin
CANAL_PRIVADO_ID=tu_canal
🔑 Obtener credenciales
Token → @BotFather
API ID y HASH → https://my.telegram.org
🚀 Instalación
git clone https://github.com/michaelGuerraQ/bot-pagos-telegram.git
cd bot-pagos-telegram
npm install
▶️ Ejecución
node index.js
🎨 Ejemplo: envío automático
// Enviar imagen
bot.sendPhoto(chatId, 'https://i.imgur.com/imagen.jpg', {
  caption: '🎉 Gracias por tu compra!'
});

// Enviar sticker
bot.sendSticker(chatId, 'https://i.imgur.com/sticker.webp');
⏱️ Mensaje programado
setTimeout(() => {
  bot.sendMessage(chatId, '⏳ Recordatorio: tu acceso está activo');
}, 60000);
👨‍💻 Autor

Michael Stuward Guerra Quispe
https://github.com/michaelGuerraQ

💥 Valor del proyecto

✔ Automatiza ventas reales
✔ Integra validación de pagos
✔ Usa lógica de negocio avanzada
✔ Simula un sistema SaaS funcional
