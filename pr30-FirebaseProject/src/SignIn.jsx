import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./firebase";
export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Signed In!"))
      .catch((err) => alert(err.message));
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => alert("Signed In with Google!"))
      .catch((err) => alert(err.message));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
        <input
          className="w-full mb-4 p-2 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-4 p-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 mb-3"
          onClick={handleEmailSignIn}
        >
          Sign In
        </button>
        <button
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
          onClick={handleGoogleSignIn}
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
};
