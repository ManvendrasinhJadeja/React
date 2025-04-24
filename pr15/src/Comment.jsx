import React from "react";

export const Comment = ({ n, m }) => {
  return (
    <div className="bg-white border-l-4 border-blue-500 p-4 shadow rounded-lg">
      <h3 className="font-bold text-gray-800">{n}</h3>
      <p className="text-gray-600">{m}</p>
    </div>
  );
};