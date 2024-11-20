// components/Navbar.jsx
import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between bg-white shadow px-4 py-2">
      <h1 className="text-xl font-semibold">Admin Dashboard</h1>
      <div>{/* Future: Add notifications or profile dropdown */}</div>
    </header>
  );
};

export default Navbar;
