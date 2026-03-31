# 🤖 Bot de Pagos Automatizado con Telegram

<p align="center">
  Automatiza ventas digitales en Telegram validando pagos y gestionando accesos a contenido privado.
</p>

---

## 🚀 Descripción

Sistema de automatización de ventas en Telegram que permite:

- 🤖 Atender clientes automáticamente  
- 📸 Recibir comprobantes de pago  
- 🧠 Validar pagos manualmente o con IA  
- 🔐 Otorgar acceso automático a canales privados  

💡 Ideal para negocios digitales, contenido VIP o membresías.

---

## ✨ Funcionalidades

- 🛒 Ventas automatizadas con flujo conversacional  
- 💳 Recepción de pagos (Yape, Plin, transferencias)  
- 📸 Validación de capturas  
- 🔔 Panel admin con botones (Aprobar / Rechazar)  
- 🔐 Acceso automático a canal privado  
- 🤖 Arquitectura dual (Bot cliente + Bot admin)  
- 📢 Mensajes automáticos y marketing  

---

## 🧠 Flujo del Sistema

```mermaid
graph TD
    A[Cliente] --> B[Bot de Ventas]
    B --> C[Envía pago]
    C --> D{Bot Admin}
    D -->|Aprobar| E[Acceso VIP]
    D -->|Rechazar| F[Error al cliente]

🛠️ Tecnologías
Node.js
node-telegram-bot-api
dotenv
Telethon (opcional)

🔐 Configuración
Variables de entorno (.env)
TELEGRAM_TOKEN=tu_token_bot_ventas
ADMIN_BOT_TOKEN=tu_token_bot_admin
API_ID=tu_api_id
API_HASH=tu_api_hash
ADMIN_CHAT_ID=tu_id_admin
CANAL_PRIVADO_ID=tu_canal_id

🚀 Instalación
git clone https://github.com/michaelGuerraQ/bot-pagos-telegram.git
cd bot-pagos-telegram
npm install
node index.js

📌 Casos de uso
🔥 Venta de contenido VIP
📚 Cursos privados
📈 Canales premium de Telegram
💰 Automatización de negocios digitales
👨‍💻 Autor

Michael Stuward Guerra Quispe

🎓 Estudiante de Ingeniería de Sistemas
💻 Backend | Bots | Automatización
