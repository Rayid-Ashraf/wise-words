import React from "react";

export default function Card({ text }) {
  return (
    <div className="px-3 border-b border-black py-7 border-opacity-10">
      <p className="text-dark-gray">{text}</p>
    </div>
  );
}
