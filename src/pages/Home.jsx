// src/pages/Home.jsx

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  ClipboardListIcon,
  RocketIcon,
  ShieldCheckIcon,
} from "lucide-react";

export default function Home() {
  return (
    <main className="relative overflow-hidden min-h-screen bg-gradient-to-b from-indigo-50 to-purple-100 flex flex-col justify-between">
      {/* === Background gradient blobs === */}
      <motion.div
        className="absolute -top-40 -left-40 w-[400px] h-[400px] rounded-full bg-indigo-400 opacity-30 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-[400px] h-[400px] rounded-full bg-purple-400 opacity-30 blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* === Hero Section === */}
      <section className="text-center px-4 py-24 z-10 relative">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-4"
        >
          Organize Your Life <br />
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Effortlessly.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl mx-auto text-gray-600 text-lg mb-8"
        >
          A modern, responsive task manager designed for speed, simplicity, and productivity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block"
        >
          <Link to="/tasks">
            <Button size="lg" className="px-8 py-4 text-lg">
              🚀 Get Started
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* === Features Section === */}
      <section className="px-6 py-16 bg-white/70 backdrop-blur-sm rounded-t-3xl shadow-lg relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-indigo-800">
          Why You'll Love It
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              Icon: ClipboardListIcon,
              title: "Easy Tasks",
              description:
                "Add, complete, filter — all in a click. No clutter, no fuss.",
            },
            {
              Icon: RocketIcon,
              title: "Super Fast",
              description:
                "Powered by Vite, React & Tailwind. Blazing speed guaranteed.",
            },
            {
              Icon: ShieldCheckIcon,
              title: "Secure & Private",
              description:
                "Tasks stored locally. No leaks, no tracking — 100% yours.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center p-4 bg-white/60 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <feature.Icon className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* === Footer CTA === */}
      <footer className="text-center py-6 text-gray-500 text-sm relative z-10">
        © 2025 Zack’s Task Manager 🚀 |{" "}
        <Link to="/tasks" className="underline text-indigo-600">
          Go to Tasks
        </Link>
      </footer>
    </main>
  );
}
