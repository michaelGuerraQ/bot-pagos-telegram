🤖 Bot de Pagos Automatizado con Telegram

Bot avanzado desarrollado en Node.js que automatiza el proceso de ventas, validación de pagos mediante imágenes y control de acceso a contenido privado en Telegram.

✨ Funcionalidades
🛒 Flujo automatizado de ventas
Interacción con clientes mediante chatbot (tipo asistente)
Respuesta automática a consultas
💳 Validación de pagos con IA (imagen)
El cliente envía captura de pago (Yape, transferencia, etc.)
El bot analiza la imagen (monto, datos)
🔔 Sistema de aprobación manual (Admin)
Se envía la evidencia a un bot administrador
Incluye botones:
✅ Aprobar
❌ Rechazar
📩 Notificación en tiempo real
El admin recibe alerta inmediata con imagen y datos del pago
🔐 Control de acceso automático
Si se aprueba el pago:
Se otorga acceso a un canal/grupo privado
Si se rechaza:
Se notifica al cliente
🧠 Arquitectura del sistema

El sistema utiliza dos bots:

Bot Cliente
Interacción con usuarios
Recepción de pagos (imágenes)
Bot Administrador
Recibe validaciones
Permite aprobar o rechazar pagos
🛠️ Tecnologías
Node.js
Telegram Bot API
Librerías:
node-telegram-bot-api
@google/generative-ai (para análisis de imágenes)
Manejo de sesiones y eventos en tiempo real
🔐 Conexión

El bot se conecta mediante:

API ID
API HASH
Token de Telegram

(Configurados mediante variables de entorno)

🚀 Instalación
# Clonar repositorio
git clone https://github.com/michaelGuerraQ/bot-pagos-telegram.git

# Entrar al proyecto
cd bot-pagos-telegram

# Instalar dependencias
npm install
⚙️ Configuración

🤖 Bot de Pagos Automatizado con Telegram

Bot avanzado desarrollado en Node.js que automatiza el proceso de ventas, validación de pagos mediante imágenes y control de acceso a contenido privado en Telegram.

✨ Funcionalidades
🛒 Flujo automatizado de ventas
Interacción con clientes mediante chatbot (tipo asistente)
Respuesta automática a consultas
💳 Validación de pagos con IA (imagen)
El cliente envía captura de pago (Yape, transferencia, etc.)
El bot analiza la imagen (monto, datos)
🔔 Sistema de aprobación manual (Admin)
Se envía la evidencia a un bot administrador
Incluye botones:
✅ Aprobar
❌ Rechazar
📩 Notificación en tiempo real
El admin recibe alerta inmediata con imagen y datos del pago
🔐 Control de acceso automático
Si se aprueba el pago:
Se otorga acceso a un canal/grupo privado
Si se rechaza:
Se notifica al cliente
🧠 Arquitectura del sistema

El sistema utiliza dos bots:

Bot Cliente
Interacción con usuarios
Recepción de pagos (imágenes)
Bot Administrador
Recibe validaciones
Permite aprobar o rechazar pagos
🛠️ Tecnologías
Node.js
Telegram Bot API
Librerías:
node-telegram-bot-api
@google/generative-ai (para análisis de imágenes)
Manejo de sesiones y eventos en tiempo real
🔐 Conexión

El bot se conecta mediante:

API ID
API HASH
Token de Telegram

(Configurados mediante variables de entorno)

🚀 Instalación
# Clonar repositorio
git clone https://github.com/michaelGuerraQ/bot-pagos-telegram.git

# Entrar al proyecto
cd bot-pagos-telegram

# Instalar dependencias
npm install
⚙️ Configuración

Crear archivo .env:

TELEGRAM_TOKEN=tu_token
API_ID=tu_api_id
API_HASH=tu_api_hash
▶️ Ejecución
node index.js
👨‍💻 Autor

Michael Stuward Guerra Quispe
🔗 https://github.com/michaelGuerraQ
Crear archivo .env:

TELEGRAM_TOKEN=tu_token
API_ID=tu_api_id
API_HASH=tu_api_hash
▶️ Ejecución
node index.js
👨‍💻 Autor

Michael Stuward Guerra Quispe
🔗 https://github.com/michaelGuerraQ
