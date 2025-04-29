import React, { useState, useEffect } from "react";

const colors = [
  "bg-yellow-200",
  "bg-pink-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-purple-200",
  "bg-red-200",
  "bg-orange-200",
];

const MyNotes = () => {
  const [notes, setNotes] = useState(() => {
    let storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });
  const [input, setInput] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleClearAll = () => {
    localStorage.clear();
    setNotes([]);
  };

  const addNote = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    if (input.trim() == "") return;
    setNotes([
      ...notes,
      { id: Date.now(), text: input.trim(), color: randomColor },
    ]);
    setInput("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((e) => e.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-pink-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-700">
        📝 MyNotes
      </h1>

      <div className="max-w-md mx-auto flex gap-2 mb-8">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write a new note..."
          className="flex-1 p-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
          maxLength={100}
        />
        <button
          onClick={addNote}
          className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition duration-200"
        >
          Add
        </button>
        <button
          onClick={handleClearAll}
          className="px-4 py-2 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-white font-semibold transition duration-200"
        >
          Clear All
        </button>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4 max-w-6xl mx-auto">
        {notes.map((note) => (
          <div
            key={note.id}
            className={`relative break-inside-avoid p-4 min-h-[120px] rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden ${note.color}`}
          >
            <p className="text-gray-800 whitespace-pre-wrap">{note.text}</p>
            <button
              onClick={() => deleteNote(note.id)}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyNotes;
