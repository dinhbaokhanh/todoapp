import React, { useState } from "react";
import ToDoApp from "./components/ToDoApp";

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([task, ...tasks])
  }

  return (
    <div className="App">
      <h2 style={{textAlign: 'center', margin: 50,}}>#todo</h2>
      <ToDoApp />
    </div>
  );
}

export default App;
