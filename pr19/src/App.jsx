// 🔧 Project Tasks Based on Methods
// Method    Task
// map()    Return an array of student names in uppercase.
// filter()    Get a list of students who passed (marks > 35).
// forEach()    Log attendance status of each student to the console.
// indexOf()    Find if a specific city (e.g., "Surat") exists in the city list.
// findIndex()    Find the index of the first student from "Ahmedabad".
// includes()    Check if "Mehul" exists in the list of student names.
// every()    Check if every student has marks greater than 25.
// some()    Check if any student is absent.

import "./App.css";

const students = [
  { id: 1, name: "Amit", marks: 75, city: "Surat", isPresent: true },
  { id: 2, name: "Riya", marks: 32, city: "Ahmedabad", isPresent: false },
  { id: 3, name: "Mehul", marks: 88, city: "Rajkot", isPresent: true },
  { id: 4, name: "Pooja", marks: 45, city: "Vadodara", isPresent: true },
  { id: 5, name: "Neha", marks: 29, city: "Surat", isPresent: false },
  { id: 6, name: "Jay", marks: 59, city: "Ahmedabad", isPresent: true },
];

function App() {
  students.map((s) => {
    s.name.toUpperCase();
  });

  let filterdStd = students.filter((s) => {
    return s.marks > 35;
  });

  students.forEach((e) => {
    return console.log(e.isPresent);
  });

  let Index = students.indexOf("Surat");

  console.log(Index);

  let abc = students.includes("Mehul");
  console.log(abc);
  let findIndex = students.findIndex((e) => e.city == "Ahmedabad");
  console.log(findIndex);

  let eve = students.every((e) => e.marks > 25);
  console.log(eve);
  let abs = students.some((s) => s.isPresent == false);
  console.log(abs);
  return (
    <>
      {filterdStd.map((s) => {
        return <p key={s.id}>{s.name}</p>;
      })}
    </>
  );
}

export default App;
