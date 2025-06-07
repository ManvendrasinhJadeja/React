import React from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { app } from "../firebase";
import { useState } from "react";
import { useEffect } from "react";

const db = getFirestore(app);

export const BlogList = () => {
  const [blogName, setBlogName] = useState("");
  const [blogContent, setBlogContent] = useState("");
  const [data, setData] = useState([]);

  async function handleDelete(id) {
    try {
      await deleteDoc(doc(db, "Data", id));

      setData(data.filter((item) => item.id !== id));
    } catch (e) {
      console.error("Error deleting document:", e);
    }
  }

  async function handleShowData() {
    const arr = [];
    const querySnapshot = await getDocs(collection(db, "Data"));
    querySnapshot.forEach((docSnap) => {
      arr.push({ id: docSnap.id, ...docSnap.data() });
    });
    setData(arr);
  }
  async function handleAddData() {
    try {
      const docRef = await addDoc(collection(db, "Data"), {
        name: blogName,
        content: blogContent,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setBlogName("");
    setBlogContent("");
    handleShowData();
  }

useEffect(()=>{handleShowData()},[data])

  return (
    // <>
    //   <input
    //     type="text"
    //     value={blogName}
    //     onChange={(e) => setBlogName(e.target.value)}
    //   />
    //   <textarea
    //     value={blogContent}
    //     onChange={(e) => setBlogContent(e.target.value)}
    //   ></textarea>

    //   <button onClick={() => handleAddData()}>send</button>

    //   {data.map((e, idx) => {
    //     return (
    //       <div key={idx}>
    //         <h1>{e.name}</h1>
    //         <p>{e.content}</p>
    //         <button onClick={() => handleDelete(e.id)}>Delete</button>
    //       </div>
    //     );
    //   })}
    // </>
    <>
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">📘 Blog Manager</h1>

      <div className="space-y-4 mb-6">
        <input
          type="text"
          placeholder="Blog Title"
          value={blogName}
          onChange={(e) => setBlogName(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Blog Content"
          value={blogContent}
          onChange={(e) => setBlogContent(e.target.value)}
          className="w-full p-2 border rounded h-32"
        ></textarea>
        <button
          onClick={handleAddData}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          ➕ Add Blog
        </button>
      </div>

      <div className="space-y-4">
        {data.map((e, idx) => (
          <div key={idx} className="p-4 border rounded shadow-sm bg-white">
            <h2 className="text-xl font-semibold">{e.name}</h2>
            <p className="mt-2 text-gray-700">{e.content}</p>
            <button
              onClick={() => handleDelete(e.id)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
            >
              🗑️ Delete
            </button>
          </div>
        ))}
      </div>
    </div></>
  );
};
