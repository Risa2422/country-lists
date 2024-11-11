"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function DarkMode() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="rounded border p-2 dark:border-gray-500">
        <div className="size-6"></div>
      </div>
    );
  }

  return (
    <div
      className="flex justify-center items-center gap-2"
      onClick={toggleTheme}
    >
      <button type="button">
        {resolvedTheme === "light" ? (
          <Sun className="size-6" />
        ) : (
          <Moon className="size-6" />
        )}
      </button>
      <p className="text-xl font-semibold">
        {resolvedTheme === "light" ? "Dark Mode" : "Light Mode"}
      </p>
    </div>
  );
}
