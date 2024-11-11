import { Moon } from "lucide-react";
import React from "react";
import DarkMode from "./DarkMode";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-7 px-4 md:px-12 shadow-md">
      <h1 className="text-xl md:text-3xl font-extrabold">
        Where in the world?
      </h1>
      <div className="flex gap-2">
        <div className="flex justify-center items-center">
          <DarkMode />
        </div>
      </div>
    </header>
  );
}
