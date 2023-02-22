import React, { useState } from 'react';
import './ToDoApp.css';
import {BsTrash} from 'react-icons/bs';

function ToDoApp() {
    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);
  
    const handleChange = (e) => {
        setTask(e.target.value);
    };
  
    const AddTask = () => {
      if (task !== "") {
        const taskDetails = {
            id: Math.floor(Math.random() * 100),
            value: task,
            isCompleted: false,
        };
  
        setTaskList([...tasklist, taskDetails]);
      }
    };
  
    const deletetask = (e, id) => {
      e.preventDefault();
      setTaskList(tasklist.filter((t) => t.id != id));
    };
  
    const taskCompleted = (e, id) => {
      e.preventDefault();
      //let's find index of element
      const element = tasklist.findIndex((elem) => elem.id == id);
  
      //copy array into new variable
      const newTaskList = [...tasklist];
  
      //edit our element
      newTaskList[element] = {
        ...newTaskList[element],
        isCompleted: true,
      };
  
      setTaskList(newTaskList);
    };
  
    return (

      <div className="container">

        <div>
          
        </div>

        <div>
          <input
            className='task-input All Active'
            type="text"
            name="text"
            id="text"
            onChange={(e) => handleChange(e)}
            placeholder="add details"
          />
          <button className="add-btn" onClick={AddTask}>Add</button>
          <br />
          {tasklist !== [] ? (
            <ul>
              {tasklist.map((t) => (
                <li className={t.isCompleted ? "crossText Completed All Active" : "listitem"}>
                  <input
                    style={{marginRight: 5}}
                    onClick={(e) => taskCompleted(e, t.id)}
                    Completed
                    type={'checkbox'}

                  />       
                  {t.value}
                  
                  <button className="Completed delete" onClick={(e) => deletetask(e, t.id)}>
                    <BsTrash />
                  </button>
                </li>
                
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      
    );
  }

export default ToDoApp