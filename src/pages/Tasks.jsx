// src/pages/Tasks.jsx

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // shadcn button
import { Input } from "@/components/ui/input";   // shadcn input
import { PlusIcon, Trash2Icon, CheckCircleIcon, FilterIcon } from "lucide-react";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Tasks() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [task, setTask] = useState("");
  const [filter, setFilter] = useState("All");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "Active") return !t.completed;
    if (filter === "Completed") return t.completed;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-indigo-800">
        🗂️ Task Manager
      </h1>

      <div className="max-w-md mx-auto mb-6 flex gap-2">
        <Input
          placeholder="Add a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask} className="flex gap-1">
          <PlusIcon className="w-4 h-4" /> Add
        </Button>
      </div>

      <div className="max-w-md mx-auto mb-4 flex gap-2 justify-center">
        <Button
          variant={filter === "All" ? "default" : "outline"}
          onClick={() => setFilter("All")}
          className="flex gap-1"
        >
          <FilterIcon className="w-4 h-4" /> All
        </Button>
        <Button
          variant={filter === "Active" ? "default" : "outline"}
          onClick={() => setFilter("Active")}
          className="flex gap-1"
        >
          <CheckCircleIcon className="w-4 h-4" /> Active
        </Button>
        <Button
          variant={filter === "Completed" ? "default" : "outline"}
          onClick={() => setFilter("Completed")}
          className="flex gap-1"
        >
          ✅ Completed
        </Button>
      </div>

      {filteredTasks.length === 0 ? (
        <div className="text-center mt-8">
          <img
            src="/empty.jpeg"
            alt="No tasks"
            className="w-40 mx-auto opacity-80"
          />
          <p className="text-gray-600 mt-4">No tasks found. Add one above!</p>
        </div>
      ) : (
        <ul className="max-w-md mx-auto space-y-3">
          {filteredTasks.map((t) => (
            <li
              key={t.id}
              className={`flex items-center justify-between p-3 rounded-lg shadow-sm bg-white/80 border ${
                t.completed ? "line-through text-gray-400" : ""
              }`}
            >
              <span
                onClick={() => toggleTask(t.id)}
                className="flex-1 cursor-pointer"
              >
                {t.text}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => deleteTask(t.id)}
              >
                <Trash2Icon className="w-4 h-4 text-red-500" />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
