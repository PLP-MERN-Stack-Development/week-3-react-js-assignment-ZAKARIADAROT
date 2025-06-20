// src/App.jsx

import React from "react";
import { Routes, Route } from "react-router-dom";

// ✅ Your shared layout (includes Navbar & Footer)
import MainLayout from "./layout/MainLayout.jsx";

// ✅ Your pages
import Home from "./pages/Home.jsx";
import Tasks from "./pages/Tasks.jsx";
import APIPage from "./pages/API.jsx";

export default function App() {
  return (
    <Routes>
      {/* Wrap all pages with MainLayout */}
      <Route element={<MainLayout />}>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Task Manager Page */}
        <Route path="/tasks" element={<Tasks />} />

        {/* Public API Example Page */}
        <Route path="/api" element={<APIPage />} />
      </Route>
    </Routes>
  );
}
