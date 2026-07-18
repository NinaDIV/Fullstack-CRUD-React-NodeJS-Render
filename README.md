# 🥦 Gestión de Alimentos — Aplicación CRUD Full-Stack con React y Node.js

![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![Render](https://img.shields.io/badge/Render-46E3B7?style=flat&logo=render&logoColor=white)

Aplicación web **CRUD full-stack** para la gestión de alimentos y categorías. Permite **agregar categorías y alimentos**, visualizarlos en una tabla interactiva y mantener su estado actualizado (disponible / no disponible). El repositorio es un **monorepo**: contiene el frontend y el backend en subcarpetas, y ambos se despliegan como servicios independientes en [Render](https://render.com/).

---

## 🧪 Funcionalidades

- Crear nuevas **categorías** con nombre y descripción.
- Agregar **alimentos** asignándolos a una categoría.
- Registrar **calorías**, descripción y estado (disponible / no disponible).
- Visualizar en una **tabla interactiva** todos los datos ingresados.

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|---|---|
| Frontend | React con Vite |
| Backend | Node.js con Express |
| Despliegue | Render (dos servicios desde el mismo repositorio) |

---

## 📋 Requisitos previos

Antes de ejecutar el proyecto necesitas tener instalado:

- **Node.js** (versión LTS, 18 o superior recomendada) — incluye **npm**.
- **Git** para clonar el repositorio.
- (Opcional) Una cuenta en **Render** si deseas desplegar la aplicación en la nube.

---

## ⚙️ Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/NinaDIV/Fullstack-CRUD-React-NodeJS-Render.git
cd Fullstack-CRUD-React-NodeJS-Render
```

### 2. Levantar el backend (API)

```bash
cd backend
npm install
node index.js
```

El servidor Express quedará escuchando en el puerto configurado en `index.js`; la terminal mostrará la URL local de la API.

### 3. Levantar el frontend (React)

En otra terminal:

```bash
cd frontend
npm install
npm run dev
```

Vite iniciará el servidor de desarrollo y mostrará la URL en la terminal (por defecto `http://localhost:5173`). Abre esa dirección en el navegador para ver la aplicación.

### 4. Build de producción del frontend

```bash
cd frontend
npm run build
npm run preview
```

`npm run build` genera los archivos optimizados y `npm run preview` los sirve localmente para verificar el resultado final.

---

## 🚀 Despliegue en Render

Se crearon **dos servicios** en Render desde este mismo repositorio:

- 🔙 **Backend API:** carpeta raíz `/backend`
  - Build: `npm install`
  - Start: `node index.js`
- 🌐 **Frontend (React):** carpeta raíz `/frontend`
  - Build: `npm install && npm run build`
  - Start: `npm run preview`

---

## 📁 Estructura del proyecto

```
Fullstack-CRUD-React-NodeJS-Render/
├── backend/          # API REST con Node.js y Express
├── frontend/         # Aplicación React (Vite)
├── Imagenes/         # Capturas de pantalla del sistema
├── .gitignore
└── README.md
```

---

## 🌐 Vista de la aplicación

> _Imagen referencial del sistema en funcionamiento_

![Vista de la aplicación](https://github.com/NinaDIV/Despliegue-en-render/blob/main/Imagenes/app.png?raw=true)

---

## 🎥 Video de presentación

🎬 [Ver en Google Drive](https://drive.google.com/file/d/1hwguYhnwgIlgO-FDkmSLUbmOIVd5qv1L/view?usp=sharing)
