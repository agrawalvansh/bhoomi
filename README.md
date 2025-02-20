# Bhoomi Admin Interface

A modern, responsive admin dashboard for the Bhoomi project, built with React and cutting-edge web technologies.

## 🚀 Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:**
  - TailwindCSS
  - Shadcn UI
  - Class Variance Authority
  - Tailwind Merge
  - Tailwind Animate
- **State Management:**
  - Redux Toolkit
  - React Redux
- **Authentication & Database:**
  - Firebase
  - React Firebase Hooks
- **Routing:**
  - React Router DOM v7
- **UI/UX:**
  - Framer Motion (animations)
  - React Icons
  - Lucide React (icons)
  - React Toastify (notifications)
- **Utilities:**
  - date-fns (date manipulation)
  - clsx (conditional classes)

## ✨ Features

- **Modern Dashboard Interface:** Clean and intuitive admin interface with a responsive design
- **Authentication:** Secure user authentication powered by Firebase
- **Real-time Updates:** Live data synchronization using Firebase Realtime Database
- **Advanced State Management:** Centralized state management with Redux Toolkit
- **Beautiful Animations:** Smooth transitions and animations using Framer Motion
- **Multiple Admin Modules:**
  - User Management
  - Product Management
  - Order Management
  - Team Management
  - Messaging System
  - Analytics Dashboard
  - Settings Management
  - Supplier Management

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd bhoomiAdminInterface
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your Firebase configuration:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📦 Build

To build for production:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## 🎨 Project Structure

```
bhoomiAdminInterface/
├── src/
│   ├── user/
│   │   └── storeAdmin/
│   │       ├── messages.jsx
│   │       ├── navBar.jsx
│   │       ├── orders.jsx
│   │       ├── products.jsx
│   │       ├── settings.jsx
│   │       ├── supplies.jsx
│   │       ├── teamManagement.jsx
│   │       └── user.jsx
│   ├── components/
│   ├── store/
│   ├── hooks/
│   ├── utils/
│   └── App.jsx
├── public/
└── package.json
```

## 🔧 Configuration

The project uses several configuration files:
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `package.json` - Project dependencies and scripts
- `.eslintrc.js` - ESLint configuration

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.