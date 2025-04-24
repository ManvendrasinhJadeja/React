import { useRef, useState } from "react";
import "./App.css";
import { Comment } from "./Comment";

function App() {
  const [data, setData] = useState([]);

  const name = useRef();
  const msg = useRef();

  function handleData() {
    if (name.current.value.trim() !== "" && msg.current.value.trim() !== "") {
      const newObj = {
        name: name.current.value.trim(),
        msg: msg.current.value.trim(),
      };
      setData([...data, newObj]);
      name.current.value = "";
      msg.current.value = "";
    } else {
      alert("Please fill in both fields.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-xl flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-center text-gray-800">Leave a Comment / Review</h1>
        <input
          type="text"
          ref={name}
          placeholder="Your Name"
          className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          ref={msg}
          placeholder="Your Message"
          className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleData}
          className="bg-blue-500 text-white p-3 rounded-xl hover:bg-blue-600 transition"
        >
          Post
        </button>
      </div>

      <div className="mt-10 w-full max-w-xl">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">All Comments</h2>
        <div className="flex flex-col gap-4">
          {data.length === 0 ? (
            <p className="text-gray-500 text-center">No comments yet.</p>
          ) : (
            data.map((e, i) => <Comment n={e.name} m={e.msg} key={i} />)
          )}
        </div>
      </div>
    </div>
  );
}

export default App;