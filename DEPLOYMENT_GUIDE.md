# 🌐 Manual de Despliegue en la Nube Paso a Paso (Vercel + Render + PostgreSQL Cloud)

Esta guía detalla el procedimiento libre de costos para desplegar la arquitectura completa del Monorepo **Rick and Morty Multiverse Explorer** (`rym-44b`) en la nube.

---

## 🗄️ PARTE 1: Base de Datos PostgreSQL Cloud en Render (Issues 5.5 & 5.6)

### Paso 1: Crear Base de Datos PostgreSQL Gestionada
1. Inicia sesión en [Render.com](https://render.com/).
2. En el panel principal, haz clic en **New +** y selecciona **PostgreSQL**.
3. Rellena los datos básicos:
   - **Name:** `rym-postgres-db`
   - **Database:** `rickandmorty`
   - **User:** `rym_admin`
   - **Region:** Selecciona la más cercana (ej. *Oregon / Ohio*).
   - **Plan:** *Free*.
4. Haz clic en **Create Database**.
5. Render generará la URL de conexión interna y la **External Database URL**:
   `postgres://rym_admin:PASSWORD@dpg-xxxx.render.com/rickandmorty`

---

## ⚡ PARTE 2: Despliegue del Backend API Express en Render (Issue 5.7)

### Paso 2: Crear el Web Service del Backend
1. En Render.com, haz clic en **New +** ➔ **Web Service**.
2. Conecta tu repositorio de GitHub (`jlcarrascof/rym-44b`).
3. Ajusta las opciones del Web Service:
   - **Name:** `rym-backend-api`
   - **Root Directory:** `back`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node src/index.js`
4. En la sección **Environment Variables**, añade las variables de tu [.env.example](file:///c:/Users/PC/Documents/rym-44b/back/.env.example):
   - `PORT`: `3001`
   - `HOST`: `0.0.0.0`
   - `DB_USER`: *(Tu usuario de Render)*
   - `DB_PASSWORD`: *(Tu contraseña de Render)*
   - `DB_HOST`: *(Tu host de Render)*
   - `DB_PORT`: `5432`
   - `DB_NAME`: `rickandmorty`
   - `NODE_ENV`: `production`
5. Haz clic en **Create Web Service**. Render instalará las dependencias y sincronizará la base de datos PostgreSQL automáticamente.
6. Copia la URL de tu API generada (ej. `https://rym-backend-api.onrender.com`).

---

## 🎨 PARTE 3: Despliegue del Frontend React en Vercel (Issue 5.8)

### Paso 3: Publicar la aplicación Vite React
1. Inicia sesión en [Vercel.com](https://vercel.com/).
2. Haz clic en **Add New...** ➔ **Project**.
3. Importa tu repositorio `rym-44b`.
4. En los ajustes de configuración de proyecto:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `front`
5. El archivo [front/vercel.json](file:///c:/Users/PC/Documents/rym-44b/front/vercel.json) se encargará automáticamente del enrutamiento SPA.
6. Haz clic en **Deploy**.
7. En segundos tendrás tu enlace oficial de producción: `https://rym-44b.vercel.app`.

---

## 🧪 PARTE 4: Verificación QA en Producción (Issue 5.9)

1. Abre `https://rym-44b.vercel.app` en tu navegador.
2. Registra un nuevo usuario con `curl` o mediante la API de Render.
3. Inicia sesión con tus credenciales.
4. Navega entre `/home`, `/favorites`, busca personajes por ID y prueba el botón **Random 🎲**.
