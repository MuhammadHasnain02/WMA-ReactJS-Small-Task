// import { useState } from "react";
// import "./App.css";
// import Result from "./components/Result";

// function App() {
//   const students = [
//     {
//       name: "Ali",
//       marks: 30,
//       status: false,
//     },
//     {
//       name: "Ahmed",
//       marks: 60,
//       status: true,
//     },
//     {
//       name: "Raza",
//       marks: 40,
//       status: false,
//     },
//     {
//       name: "Zubair",
//       marks: 80,
//       status: true,
//     },
//   ];

//   const [passedStd, setPassedStd] = useState("ALL");

//   return (
//     <div>
//       {/* Buttons */}
//       <button onClick={() => setPassedStd("PASS")}>PASS</button>
//       <button onClick={() => setPassedStd("FAIL")}>FAIL</button>

//       {/* All OR Filteres Students */}
//       {passedStd === "ALL"
//         // Map All
//         ? students.map((m, i) => {
//             return <Result key={i} marks={m.marks} name={m.name} />;
//           })
//         // Map PASS
//         : passedStd === "PASS"
//         ? students.map((m, i) => {
//             return m.status ? (
//               <Result key={i} marks={m.marks} name={m.name} />
//             ) : (
//               ""
//             );
//           })
//         // Map FAIL
//         : students.map((m, i) => {
//             return m.status ? (
//               ""
//             ) : (
//               <Result key={i} marks={m.marks} name={m.name} />
//             );
//           })}
//     </div>
//   );
// }

// export default App;

// ==============================================================

import { useState } from "react";
import "./App.css";
import Result from "./components/Result";

function App() {

  // Students Array Of Object
  const students = [
    {
      name: "Ali",
      marks: 30,
      status: false,
    },
    {
      name: "Ahmed",
      marks: 60,
      status: true,
    },
    {
      name: "Raza",
      marks: 40,
      status: false,
    },
    {
      name: "Zubair",
      marks: 80,
      status: true,
    },
  ];

  // ALL | PASS | FAIL -> MODES
  const [ mode, setMode ] = useState("ALL");

  // Filtered Students
  const filteredStudents = 
    mode === 'ALL' 
    ? students 
    : mode === 'PASS' 
    ? students.filter((s) => s.status === true) 
    : students.filter((s) => s.status === false)

  return (
    <div>

      {/* Buttons */}
      <button onClick={() => setMode("PASS")}>PASS</button>
      <button onClick={() => setMode("FAIL")}>FAIL</button>

      {/* All OR Filteres Students */}
      {
        filteredStudents.map((m, i) => {
          return <Result key={i} marks={m.marks} name={m.name} />;
        })
      }

    </div>
  );
}

export default App;
