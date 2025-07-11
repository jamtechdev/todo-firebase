// src/App.js
import React, { useState } from "react";
import Signup from "./Signup";

function App() {
  const [userSignedUp, setUserSignedUp] = useState(false); // Track login status
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!userSignedUp ? (
        <>
          <Signup onSuccess={() => setUserSignedUp(true)} />
        </>
      ) : (
        <>
          <h1>📝 ToDo App For Testing Circle-ci</h1>
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
          />
          <button onClick={handleAdd}>Add</button>

          <ul>
            {todos.map((todo, i) => (
              <li key={i}>
                {todo} <button onClick={() => handleDelete(i)}>❌</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App;
