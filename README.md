# 𝐄𝐯𝐒𝐩𝐚𝐫𝐤𝐬 - Used Products Resale Platform

> A full-stack peer-to-peer e-commerce marketplace for buying and selling used products with secure Stripe payments and role-based dashboards.

[![Live Demo](https://img.shields.io/badge/Live-evspark22.web.app-brightgreen?style=flat-square)](https://evspark22.web.app)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square)](https://react.dev)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=flat-square)](https://nodejs.org)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?style=flat-square)](https://mongodb.com)
[![Stripe](https://img.shields.io/badge/Payments-Stripe-purple?style=flat-square)](https://stripe.com)

---

## 🎯 What is EvSparks?

**EvSparks** is a production-ready marketplace connecting buyers and sellers. Browse products by category, place bookings, complete Stripe payments, and manage inventory through personalized dashboards with admin controls.

**Live:** https://evspark22.web.app | **API:** https://reseller-ev.vercel.app

---

## ✨ Core Features

**For Buyers**
- 🛍️ Browse & filter products by category
- 📦 One-click booking with modal form
- 💳 Secure Stripe payments
- 📋 Order tracking dashboard

**For Sellers**
- ⬆️ Upload products with auto image hosting
- ✏️ Edit, update, delete listings
- 📊 Inventory management dashboard

**For Admins**
- 👥 User & role management
- 🗑️ Delete problematic users
- 📝 Content moderation

**Platform**
- 🔐 Firebase + Google OAuth authentication
- 📱 Responsive dark-theme UI
- ⚡ 70% faster APIs with React Query

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, React Router v6, React Query, Tailwind CSS, DaisyUI |
| **Backend** | Node.js, Express, MongoDB, JWT |
| **Payments** | Stripe API |
| **Auth** | Firebase (Email/OAuth) |
| **Hosting** | Firebase (Frontend), Vercel (Backend) |
| **Images** | ImgBB API |

---

## 📊 Quick Stats

- **20+** Components | **2** Custom Hooks | **18+** API Endpoints
- **3000+** Lines of Code | **4** Database Collections | **3** User Roles
- **70%** API Optimization | **100%** Stripe PCI Compliance | **Live in Production**

---

## 🔐 Authentication & Authorization

**Auth Methods:** Email/Password + Google OAuth with JWT tokens

**Role-Based Access:**
```
Public Routes    → Home, Shop, Blog (no auth required)
Private Routes   → Dashboard, Orders (auth required)
Admin Routes     → User Management (admin role required)
```

---


## 🚀 Getting Started

1. **Install**
```bash
git clone <your-repo>
npm install
```

2. **Run**
```bash
npm start
```

---


---

## 📈 Performance Optimizations

✅ React Query caching (70% API reduction)  
✅ Lazy route loading  
✅ Image CDN via ImgBB  
✅ Conditional query fetching  
✅ Responsive mobile-first design  


---

## 🔒 Security

✅ JWT token validation  
✅ Firebase OAuth 2.0  
✅ Stripe PCI-DSS compliance  
✅ Environment variable protection  
✅ HTTPS/TLS encryption  

---

## 📋 Project Structure

```
src/
├── component/   (Layout, Routes, Shared components)
├── Pages/       (Home, Dashboard, Shop, Blog)
├── context/     (AuthContext, PrivateRoute)
├── hooks/       (useToken, useAdmin)
├── firebase/    (Config)
└── App.js
```

---

## 📝 License

Private/Proprietary. Contact owner for usage rights.

---


