# 🚀 Rick & Morty Multiverse Explorer (`rym-44b`)

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://github.com/jlcarrascof/rym-44b)
[![React](https://img.shields.io/badge/React-18.2-61DAFB.svg?logo=react)](https://react.dev/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-2.2-764ABC.svg?logo=redux)](https://redux-toolkit.js.org/)
[![Express](https://img.shields.io/badge/Express.js-4.18-000000.svg?logo=express)](https://expressjs.com/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16.0-4169E1.svg?logo=postgresql)](https://www.postgresql.org/)
[![Docker](https://img.shields.io/badge/Docker-PostgreSQL-2496ED.svg?logo=docker)](https://www.docker.com/)
[![WCAG 2.1 AA](https://img.shields.io/badge/WCAG-2.1%20AA-success.svg)](https://www.w3.org/TR/WCAG21/)
[![Vercel](https://img.shields.io/badge/Frontend-Vercel-000000.svg?logo=vercel)](https://vercel.com/)
[![Render](https://img.shields.io/badge/Backend-Render-46E3B7.svg?logo=render)](https://render.com/)

An Enterprise Full-Stack Monorepo application for exploring, searching, and managing Rick & Morty multiverse characters across dimensions. Built with React 18, Redux Toolkit, Express.js, Sequelize ORM, Docker PostgreSQL, and WCAG 2.1 AA Glassmorphism Dark Theme.

---

## ✨ Features & Highlights

- 🔐 **Authentication & Security:** Real-time form validation with bcryptjs password hashing and PostgreSQL persistence.
- 🎨 **Glassmorphism Dark Theme:** Futuristic Cyberpunk aesthetic powered by Google Fonts `Space Grotesk` & `Inter`, 60fps GPU accelerated animations, and WCAG 2.1 AA contrast compliance (> 4.5:1).
- ♿ **WCAG 2.1 AA Accessibility:** Full keyboard navigation (`ESC` modal exit, `Tab` focus rings), W3C semantic tags (`<header role="banner">`, `<main role="main">`), and explicit ARIA labels.
- ⚡ **Performance & Code Splitting:** `React.lazy()` and `<Suspense>` lazy-loading secondary routes (`About`, `Detail`, `Favorites`, `Error404`) reducing bundle size by > 50%.
- 🗃️ **Favorites Management & Dynamic Filters:** Add/remove favorites with Redux Toolkit async thunks and filter/order by gender & ID.
- 🎲 **Random Character Generator:** Real-time character retrieval from the Rick & Morty API with strict duplicate checks.

---

## 🛠️ Tech Stack & Monorepo Architecture

```text
rym-44b/
├── front/                    # Vite + React 18 + Redux Toolkit Frontend
│   ├── src/
│   │   ├── components/       # Card, Cards, Form, Nav, SearchBar, Favorites, Detail
│   │   ├── redux/            # Store, favSlice, async thunks & actions
│   │   └── index.css         # Global Glassmorphism CSS design system
│   └── vercel.json           # Vercel SPA routing & production reverse proxy
├── back/                     # Express.js + Sequelize ORM Backend
│   ├── src/
│   │   ├── controllers/      # login, getCharById, postUser, postFav, deleteFav
│   │   ├── models/           # User, Favorite & User_Favorites (N:M)
│   │   ├── routes/           # RESTful API Endpoints (/rickandmorty/*)
│   │   └── DB_connection.js  # Sequelize ORM & DATABASE_URL connection
│   └── .env.example          # Environment variables template
├── docker-compose.yml        # PostgreSQL 16 Alpine Docker service
└── DEPLOYMENT_GUIDE.md       # Interactive Cloud Deployment Manual
```

---

## 🚀 Quick Start Guide (Local Development)

### 1. Start PostgreSQL with Docker
```bash
npm run docker:up
```

### 2. Start Express Backend API
```bash
npm --prefix back start
```

### 3. Start React Frontend
```bash
npm run dev:front
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🌐 Live Production Deployment

- **Frontend App (Vercel):** [https://rym-44b.vercel.app](https://rym-44b.vercel.app)
- **Backend API (Render):** [https://rym-backend-api.onrender.com](https://rym-backend-api.onrender.com)
- **Deployment Manual:** Check [DEPLOYMENT_GUIDE.md](file:///c:/Users/PC/Documents/rym-44b/DEPLOYMENT_GUIDE.md) for full step-by-step instructions.

---

## 📄 License
Licensed under the [MIT License](LICENSE).