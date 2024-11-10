import React from "react";
import { Moon } from "react-feather";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-7 px-4 md:px-12 shadow-md">
      <h1 className="text-xl md:text-3xl font-extrabold">
        Where in the world?
      </h1>
      <div className="flex gap-2">
        <div className="logo">
          <Moon />
        </div>
        <p className="text-xl font-semibold">Dark Mode</p>
      </div>
    </header>
  );
}
