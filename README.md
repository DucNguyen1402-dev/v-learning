# V-Learning

V-Learning is an online learning platform built with React, focusing on a modern, responsive, and user-friendly learning experience.

## ✨ Features

- 🔐 User authentication
- 📚 Browse and explore courses
- 🔎 Search and filter courses
- 📄 Course pagination
- 📖 Course details
- 📝 Course enrollment and cancellation
- 💳 Course payment
- 🎥 Course learning and video content
- 👤 User profile management
- 📱 Responsive design for desktop, tablet, and mobile

## 🛠️ Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **TanStack React Query**
- **Axios**
- **React Hook Form**
- **Lucide React**

## 📁 Project Structure

The project follows a **module-first architecture** to keep features isolated, maintainable, and scalable.

```text
src/
├── modules/
│   ├── auth/
│   ├── courses/
│   ├── personal-courses/
│   ├── profile/
│   └── ...
├── components/
├── hooks/
├── layouts/
├── routes/
├── services/
├── types/
└── ...
```

Each module is responsible for a specific domain of the application.

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
cd v-learning
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Then open the URL provided by Vite in your terminal.

## 📦 Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🎨 UI & Design

V-Learning uses Tailwind CSS with a **semantic design token system** to maintain a consistent and scalable UI.

Key principles:

- Mobile-first responsive design
- Semantic color tokens
- Reusable UI components
- Consistent spacing, typography, and border radius
- Minimal use of hard-coded colors inside components

## 🔌 API

The application communicates with a REST API for:

- Authentication
- Course catalog
- Course enrollment
- Personal courses
- User profile
- Payment

Axios is used for API communication, while TanStack React Query handles server state and data fetching.

## 📌 Project Status

🚧 **In Development**

Some features and UI components are still being improved and refined.

## 👨‍💻 Author

**V-Learning**

> A modern learning platform built with React and TypeScript.
