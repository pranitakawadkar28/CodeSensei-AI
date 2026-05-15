# 🤖 CodeSensei AI - Professional Code Reviewer

<p align="center">
  <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
  <img src="https://img.shields.io/badge/React-19.0-blue.svg" />
  <img src="https://img.shields.io/badge/Node.js-20.x-green.svg" />
  <img src="https://img.shields.io/badge/Gemini%20AI-Flash%201.5-orange.svg" />
</p>

CodeSensei AI is an enterprise-grade MERN stack application that leverages Google's Gemini AI to provide instant, expert-level code reviews. Designed with a minimalist Zinc-themed aesthetic, it helps developers identify bugs, security flaws, and performance bottlenecks in seconds.

---

## 📖 Table of Contents
- [✨ Features](#-features)
- [🛠️ Tech Stack](#-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🔌 API Endpoints](#-api-endpoints)
- [⚙️ Setup Instructions](#-setup-instructions)
- [🚀 Deployment](#-deployment)
- [📄 License](#-license)

---

## ✨ Features

- **🚀 AI-Powered Reviews**: Real-time code analysis using `gemini-1.5-flash`.
- **🛡️ Secure Authentication**: JWT-based user registration and login system.
- **🎨 Modern UI/UX**: Professional, minimalist Zinc & Slate design built with Tailwind CSS.
- **💻 Multi-Language Support**: Reviews code in JavaScript, Python, Java, C++, and more.
- **⚡ Fast & Responsive**: Optimized for speed and seamless mobile/desktop experience.
- **🔒 Protected Routes**: Secure workspace accessible only to registered users.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS, Axios, React Router, PrismJS.
- **Backend**: Node.js, Express, MongoDB, Google Generative AI (Gemini).
- **Security**: JWT, Bcrypt.js, Zod Validation.

---

## 📂 Project Structure

```text
CodeSensei-AI/
├── Backend/          # Node.js & Express Server
├── Frontend/         # React.js & Tailwind UI
└── README.md         # Project Documentation
```

---

## 🔌 API Endpoints

### Auth
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - User login

### AI Service
- `POST /api/ai/review` - Code review (Requires Auth)

---

## ⚙️ Setup Instructions

### 1. Backend Setup
```bash
cd Backend && npm install
# Setup .env with: MONGODB_URL, GOOGLE_GEMINI_KEY, JWT_SECRET
npm run dev
```

### 2. Frontend Setup
```bash
cd Frontend && npm install
# Setup .env with: VITE_API_BASE_URL
npm run dev
```

---

## 🚀 Deployment (Render)

- **Backend**: Deploy as a Web Service (Root: `Backend`).
- **Frontend**: Deploy as a Static Site (Root: `Frontend`).

---

## 📄 License
MIT License - feel free to use this project for your own learning!

---

<p align="center">
  Built with ❤️ by <b>Pranita Kawadkar</b>
</p>
