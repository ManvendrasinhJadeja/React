import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="w-full max-w-sm bg-[#0f0f0f] rounded-xl overflow-hidden shadow-md border border-gray-800">
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500 h-20 relative">
        <div className="absolute inset-x-0 top-10 flex justify-center">
          <div className="bg-gray-900 p-4 w-[80px] h-[80px] flex justify-center items-center rounded-full border-4 border-[#0f0f0f]">
            <span className="text-white text-xl">👤</span>
          </div>
        </div>
      </div>
      <div className="pt-10 pb-6 px-6 text-center">
        <h2 className="text-white text-lg font-semibold">{student.name}</h2>
        <p className="text-blue-400 text-sm">{student.year}</p>
        <div className="mt-4 space-y-2 text-left text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-blue-400">🪪 ID:</span>
            <span>{student.id}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400">📘</span>
            <span>{student.course}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400">🎓</span>
            <span>{student.year} Student</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400">✉️</span>
            <span>{student.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
