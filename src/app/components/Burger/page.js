import React from "react";

export default function Burger() {
  return (
    <button className="flex flex-col gap-1.5 justify-center items-center w-8 h-8 cursor-pointer group">
      <span className="w-7 h-[2px] bg-gray-800 rounded-full group-hover:bg-[#3d7042] transition-colors"></span>
      <span className="w-7 h-[2px] bg-gray-800 rounded-full group-hover:bg-[#3d7042] transition-colors"></span>
      <span className="w-7 h-[2px] bg-gray-800 rounded-full group-hover:bg-[#3d7042] transition-colors"></span>
    </button>
  );
}
