# 📋 Zack's Task Manager

A modern, responsive Task Manager web app built with **React**, **Vite**, **Tailwind CSS 4.1**, and **shadcn/ui**.  
Easily add, complete, delete, and filter tasks — plus explore live API data — all in a beautiful, themeable interface with smooth animations.

---

## 🚀 Live Demo

👉 [View the deployed app here](https://yourusername.github.io/your-repo-name/)

---

## ✨ Features

✅ Mobile-first responsive design  
✅ Dark mode toggle with smooth transitions  
✅ Reusable UI components (Button, Card, Navbar, Footer)  
✅ Task Manager: add, complete, delete, filter tasks  
✅ Fetch & display posts from a public API  
✅ Search, loading states, and pagination  
✅ Beautiful styling with Tailwind CSS & shadcn/ui  
✅ Deployed seamlessly to GitHub Pages

---

## 📂 Project Structure

root/
├── public/
│ ├── favicon.png # Custom favicon
├── src/
│ ├── assets/ # Static images & icons
│ ├── components/ # Reusable UI components
│ │ ├── Button.jsx
│ │ ├── Card.jsx
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ ├── context/ # Theme context for dark mode
│ │ ├── ThemeContext.jsx
│ ├── layout/ # Layout wrapper (Navbar & Footer)
│ │ ├── MainLayout.jsx
│ ├── pages/ # Pages: Home, Tasks, API
│ │ ├── Home.jsx
│ │ ├── Tasks.jsx
│ │ ├── API.jsx
│ ├── hooks/ # Custom hooks
│ │ ├── useLocalStorage.jsx
│ ├── App.jsx # Main routes
│ ├── main.jsx # App bootstrap with HashRouter
├── vite.config.js # Vite config with base path for GitHub Pages
├── index.html # HTML template with title & favicon

2️⃣ Install dependencies
bash
Copy
Edit
pnpm install
3️⃣ Run the app locally
bash
Copy
Edit
pnpm run dev
Open http://localhost:5173 to view it in your browser.

4️⃣ Build for production
bash
Copy
Edit
pnpm run build
📚 Tech Stack
React

Vite

Tailwind CSS

shadcn/ui

React Router

JSONPlaceholder API

🧑‍💻 Contributing
Pull requests and issues are welcome! Feel free to fork the repo and improve this project.

📄 License
This project is open-source and licensed under the MIT License.

❤️ Author
Built with passion by Zack — GitHub
