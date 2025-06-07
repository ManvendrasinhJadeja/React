import React, { useState } from "react";
import { getAuth, GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { app } from "./firebase";
export const SignInPage = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signUpWithGoogle=()=>{
    signInWithPopup(auth,googleProvider)
  }

  return (
    <>
      <h1>Sign In Page</h1>
      <div className="signIn">
        <div className="">
          {" "}
          <label>Email : </label>
          <input
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="">
          <label>Password : </label>
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button>Sign In</button>
        <button onClick={signUpWithGoogle}>Sign In With Google </button>
      </div>
    </>
  );
};
