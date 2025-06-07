import { useEffect, useState } from "react";
import "./App.css";
import { SignIn } from "./SignIn";
import { SignUp } from "./signUp";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./firebase";
function App() {
  const [user, setUser] = useState(null);
  const [signIn, setSignIn] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  
  if (user == null) {
    return (
      <>
        <button className={"px-3 py-2 bg-blue-500 border-1"} onClick={() => setSignIn(!signIn)}>
          {!signIn ? "signIn" : "Signup"}
        </button>
        {signIn ? <SignIn /> : <SignUp />}{" "}
      </>
    );
  }

  return (
    <>
      <h1>hello {user.email}</h1>
      <button onClick={() => signOut(auth)}>log out</button>
    </>
  );
}

export default App;
