import "./App.css";
import {
  doc,
  getDocs,
  getFirestore,
  addDoc,
  collection,
} from "firebase/firestore";
import { app } from "./firebase";
import { useState } from "react";

const db = getFirestore(app);

function App() {
  const [name, setName] = useState("");

  const [users, setUsers] = useState([]);
  let dataToSend = { name };

  async function sendData() {
    try {
      const docRef = await addDoc(collection(db, "users"), dataToSend);

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function getData() {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userList = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data()); // Logging
        userList.push({ id: doc.id, ...doc.data() });
      });
      setUsers(userList); // Set state only once after loop
    } catch (e) {
      console.error("Error getting documents: ", e);
    }
  }

  return (
    <>
      <label htmlFor="">Name :</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={sendData}>send</button>
      <button onClick={getData}>get</button>

      {users.map((e) => (
        <h1 key={e.id}>{e.name}</h1>
      ))}
    </>
  );
}

export default App;
