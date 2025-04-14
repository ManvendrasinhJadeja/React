import StudentCard from "../Common/StudentCard/StudentCard";
import "./App.css";
import Students from "../Data/students";
import { useState } from "react";

function App() {
  let [student, setStudent] = useState(Students);
  const [query, setQuery] = useState("");
  const [queryId, setQueryId] = useState("");

  function handleSearchId(e) {
    let value = e.target.value;
    setQueryId(value);

    if (value == "") {
      setStudent(Students);
    } else {
      let filteredStudents = Students.find((s) => s.id == value);
      if (filteredStudents == null) {
        setStudent([]);
      } else {
        setStudent([filteredStudents]);
      }
    }
  }
  function handleCourseChange(e) {
    let value = e.target.value;

    let filteredStudents = Students.filter((s) => s.course === value);
    if (value === "All") {
      setStudent(Students);
    } else {
      setStudent(filteredStudents);
    }
  }
  function handleSearch(e) {
    let value = e.target.value;
    setQuery(value);

    if (value == "") {
      setStudent(Students);
    } else {
      let filteredStudents = Students.filter((s) =>
        s.name.toLowerCase().includes(value.toLowerCase())
      );
      setStudent(filteredStudents);
    }
  }
  return (
    <>
      <div className="min-h-screen bg-gray-900 p-6 flex flex-col gap-5">
        <div className="flex gap-5">
          <input
            type="text"
            className="border border-indigo-500 rounded px-4 py-1 bg-gray-800 text-white"
            placeholder="Search"
            onChange={handleSearch}
            value={query}
          />
          <input
            type="tel"
            className="border border-indigo-500 rounded px-4 py-1 bg-gray-800 text-white"
            placeholder="Search by ID (<=100)"
            onChange={handleSearchId}
            value={queryId}
          />
          <select
            className="bg-gray-800 text-white rounded px-4 py-1"
            onChange={handleCourseChange}
          >
            <option value="All">All Courses</option>
            <option value="B.Tech CSE">B.Tech CSE</option>
            <option value="BBA">BBA</option>
            <option value="BCA">BCA</option>
            <option value="B.Sc IT">B.Sc IT</option>
            <option value="MBA">MBA</option>
            <option value="B.Com">B.Com</option>
            <option value="B.Tech ECE">B.Tech ECE</option>
            <option value="B.Arch">B.Arch</option>
            <option value="B.Pharm">B.Pharm</option>
            <option value="B.Sc Physics">B.Sc Physics</option>
          </select>
        </div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {student.map((s) => (
            <StudentCard key={s.id} student={s} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
