<p align="center">
  <img src="https://img.shields.io/badge/Telegram-Bot%20de%20Pagos%20Automatizado-2AABEE?style=for-the-badge&logo=telegram&logoColor=white" alt="Bot de Pagos Telegram" />
</p>

<h1 align="center">🤖 Bot de Pagos Automatizado con Telegram</h1>

<p align="center">
  Bot avanzado desarrollado en <strong>Node.js</strong> para automatizar ventas, validar pagos mediante imágenes y gestionar el acceso a contenido privado en Telegram.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-green?style=flat-square&logo=node.js" />
  <img src="https://img.shields.io/badge/Telegram-Bot-blue?style=flat-square&logo=telegram" />
  <img src="https://img.shields.io/badge/IA-An%C3%A1lisis%20de%20im%C3%A1genes-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/Estado-Activo-success?style=flat-square" />
</p>

---

## 📌 Descripción

Este proyecto es un **bot de pagos automatizado en Telegram** que permite gestionar el proceso de venta de forma más rápida y organizada.

El sistema recibe comprobantes de pago enviados por los clientes, analiza la imagen con IA, notifica al administrador en tiempo real y permite aprobar o rechazar el acceso a contenido privado dentro de Telegram.

---

## ✨ Funcionalidades

### 🛒 Flujo automatizado de ventas
- Interacción automática con clientes mediante chatbot
- Respuesta a consultas frecuentes
- Guía al usuario durante el proceso de compra

### 💳 Validación de pagos con IA
- El cliente envía una captura de pago
- El sistema analiza la imagen automáticamente
- Extracción de información relevante como monto o datos visibles

### 🔔 Sistema de aprobación manual para admin
- El comprobante se envía a un bot o panel de administración
- El administrador recibe la evidencia en tiempo real
- Incluye botones interactivos:
  - ✅ Aprobar
  - ❌ Rechazar

### 📩 Notificaciones en tiempo real
- Aviso inmediato al administrador cuando llega un nuevo pago
- Seguimiento rápido del estado de cada validación

### 🔐 Control de acceso automático
- Si el pago es aprobado, el usuario obtiene acceso al canal o grupo privado
- Si el pago es rechazado, el usuario recibe una notificación automática

---

## 🧠 Arquitectura del sistema

El sistema trabaja con **dos bots principales**:

### 👤 Bot Cliente
Encargado de la interacción con los usuarios:
- Atención automática
- Flujo de compra
- Recepción de imágenes de pago

### 🛡️ Bot Administrador
Encargado de la validación:
- Recibe los comprobantes
- Permite aprobar o rechazar pagos
- Controla el acceso al contenido privado

---

## 🛠️ Tecnologías utilizadas

- **Node.js**
- **Telegram Bot API**
- **Google Generative AI** para análisis de imágenes

### Librerías principales
- `node-telegram-bot-api`
- `@google/generative-ai`

### Otras capacidades
- Manejo de sesiones
- Eventos en tiempo real
- Automatización de respuestas
- Validación de evidencias de pago

---

## 🔐 Conexión y credenciales

El bot se conecta utilizando las siguientes variables de entorno:

- **TELEGRAM_TOKEN**
- **API_ID**
- **API_HASH**

Estas credenciales deben configurarse en un archivo `.env`.

---

## 🚀 Instalación

```bash
# Clonar repositorio
git clone https://github.com/michaelGuerraQ/bot-pagos-telegram.git

# Entrar al proyecto
cd bot-pagos-telegram

# Instalar dependencias
npm install
