<h1 align="center">🤖 Bot de Pagos Automatizado con Telegram</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Telegram-Bot-blue?logo=telegram">
  <img src="https://img.shields.io/badge/Bot_de_Pagos-Automatizado-0A66C2">
</p>

<p align="center">
Bot avanzado desarrollado en <b>Node.js</b> para automatizar ventas, validar pagos mediante imágenes y gestionar el acceso a contenido privado en Telegram.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?logo=node.js">
  <img src="https://img.shields.io/badge/Telegram-Bot-blue?logo=telegram">
  <img src="https://img.shields.io/badge/IA-Análisis_de_Imágenes-orange">
  <img src="https://img.shields.io/badge/Estado-Activo-brightgreen">
</p>

---

## 🚀 Descripción

Este bot permite automatizar un sistema completo de ventas digitales dentro de Telegram, incluyendo validación de pagos y control de acceso a contenido privado.

---

## ✨ Funcionalidades

- 🛒 **Ventas automatizadas**
  - Flujo conversacional tipo asistente
  - Respuesta automática a clientes

- 💳 **Validación de pagos**
  - Recepción de capturas (Yape, transferencias, etc.)
  - Análisis automático de imágenes

- 🔔 **Sistema de aprobación**
  - Envío de evidencia al administrador
  - Botones interactivos:
    - ✅ Aprobar
    - ❌ Rechazar

- 🔐 **Control de acceso**
  - ✔ Acceso automático a canal privado
  - ❌ Rechazo con notificación al cliente

- 🤖 **Arquitectura de doble bot**
  - Bot cliente (ventas)
  - Bot administrador (validación)

- 🎨 **Automatización de contenido**
  - Envío de imágenes
  - Envío de stickers
  - Mensajes programados

---

## 🧠 Flujo del sistema

```text
Cliente → Bot de Ventas → Envío de pago (imagen)
                      ↓
              Bot Administrador
                      ↓
           (Aprobar / Rechazar)
                      ↓
        Acceso o rechazo automático

🛠️ Tecnologías
Node.js
Telegram Bot API
node-telegram-bot-api
dotenv
IA para análisis de imágenes
🔐 Configuración

Crear archivo .env:

TELEGRAM_TOKEN=tu_token
ADMIN_BOT_TOKEN=tu_token_admin
API_ID=tu_api_id
API_HASH=tu_api_hash
ADMIN_CHAT_ID=tu_id_admin
CANAL_PRIVADO_ID=tu_canal
🔑 Credenciales
Token → @BotFather
API ID y HASH → https://my.telegram.org
🚀 Instalación
git clone https://github.com/michaelGuerraQ/bot-pagos-telegram.git
cd bot-pagos-telegram
npm install
▶️ Ejecución
node index.js
🎨 Ejemplo de envío automático
bot.sendPhoto(chatId, 'https://i.imgur.com/imagen.jpg', {
  caption: '🎉 Gracias por tu compra!'
});

bot.sendSticker(chatId, 'https://i.imgur.com/sticker.webp');
⏱️ Mensajes programados
setTimeout(() => {
  bot.sendMessage(chatId, '⏳ Recordatorio: tu acceso está activo');
}, 60000);
👨‍💻 Autor

Michael Stuward Guerra Quispe
https://github.com/michaelGuerraQ
