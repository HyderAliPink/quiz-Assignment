import { useState } from "react";

// export default function TodoList() {
//   const [Tasks, setTasks] = useState([]);
//   const [newTask, setnewTask] = useState("");

//   function handleInputChange(e) {
//     setnewTask(e.target.value);
//   }

//   function addTask() {
//     if (newTask.trim() === '') {
//         return;
//     }
//     setTasks([...Tasks, newTask])
//    setnewTask("")
//   }

//   function deleteTask(index) {
// let arr = [...Tasks]
// console.log(arr);

// arr.splice(index, 1)
// setTasks(arr)

//   }

//   function UpdateTask(index) {}

//   return (
//     <div>
//       <h1>Todo List app</h1>
//       <div>
//         <input
//           type="text"
//           placeholder="Enter a task..."
//           value={newTask}
//           onChange={handleInputChange}
//         />
//         <button className="Add-button" onClick={addTask}>
//           Save
//         </button>
//       </div>
//       <ol>
//         {Tasks.map((task, index) => (
//           <li key={index}>
//             <span>{task}</span>
//             <button onClick={() => deleteTask(index)}>delete</button>
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// }

// figure out 






export default function TodoList() {
  const [Tasks, setTasks] = useState([]);
  const [newTask, setnewTask] = useState("");
  const [edit, setEdit] = useState(null);

  function handleInputChange(e) {
    setnewTask(e.target.value);
  }

  function addTask() {
    if (newTask.trim() === "") return;

    // if (edit !== null) {
    //   let arr = [...Tasks];

    //   arr[edit] = newTask;

    //   setTasks(arr);
    //   setEdit(null);
    // } else {
    //   setTasks([...Tasks, newTask]);
    //   setnewTask("");
    // }

    if (edit !== null) {
        let arr = [...Tasks]
        arr[edit] = newTask;
        setTasks(arr);
        setEdit(null)
    }

    // <<<<<<<<<<<<<<<<<<<<----// How update function or edit function works ->>>>>>>>>>>>>>>

    else {
        setTasks([...Tasks, newTask])
        setnewTask("")
    }
  }

  function deleteTask(index) {
    let arr = [...Tasks];
    arr.splice(index, 1);
    console.log(arr);

    setTasks(arr);
  }

  function UpdateTask(index, newValue) {}

  return (
    <div>
      <h1>Todo-List-App</h1>
      <div>
        <input type="text" value={newTask} onChange={handleInputChange} />
        <button onClick={addTask}>Save</button>
      </div>
      <div>
        <ul>
          {Tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => deleteTask(index)}>Delete</button>
              <button
                onClick={(e) => {
                  setnewTask(task), setEdit(index);
                }}
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
