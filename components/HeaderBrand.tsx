"use client";
import React from "react";
import "@/app/css/HeaderBrand.css";

const HeaderBrand: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full bg-gray-900 py-3">
      <span className="typing-text text-white text-xl md:text-2xl font-bold">
        🚀 Welcome To App Curhatins 🚀
      </span>
    </div>
  );
};

export default HeaderBrand;
