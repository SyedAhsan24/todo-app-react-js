// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAddTask = () => {
//     if (inputValue.trim() !== '') {
//       setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
//       setInputValue('');
//     }
//   };

//   const handleCompleteTask = (taskId) => {
//     const updatedTasks = tasks.map(task =>
//       task.id === taskId ? { ...task, completed: !task.completed } : task
//     );
//     setTasks(updatedTasks);
//   };

//   const handleDeleteTask = (taskId) => {
//     const updatedTasks = tasks.filter(task => task.id !== taskId);
//     setTasks(updatedTasks);
//   };

//   return (
//     <div className="App">
//       <h1>Simple Todo App</h1>
//       <div className="input-container">
//         <input
//           type="text"
//           placeholder="Add new task"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//         <button onClick={handleAddTask}>Add Task</button>
//       </div>
//       <ul className="task-list">
//         {tasks.map(task => (
//           <li key={task.id} className={task.completed ? 'completed' : ''}>
//             <span>{task.text}</span>
//             <div>
//               <button onClick={() => handleCompleteTask(task.id)}>
//                 {task.completed ? 'Undo' : 'Complete'}
//               </button>
//               <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editTaskId, setEditTaskId] = useState(null); // State to track task being edited

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      if (editTaskId !== null) {
        // If there's an editTaskId, update the existing task
        const updatedTasks = tasks.map(task =>
          task.id === editTaskId ? { ...task, text: inputValue } : task
        );
        setTasks(updatedTasks);
        setEditTaskId(null); // Clear edit state after updating task
      } else {
        // Otherwise, add a new task
        setTasks([...tasks, { id: Date.now(), text: inputValue, completed: false }]);
      }
      setInputValue('');
    }
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId) => {
    const taskToEdit = tasks.find(task => task.id === taskId);
    setInputValue(taskToEdit.text);
    setEditTaskId(taskId);
  };

  const handleDeleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add new task"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button className='btn1' onClick={handleAddTask}>{editTaskId !== null ? 'Update Task' : 'Add Task'}</button>
        <button className='btn4' onClick={handleDeleteAllTasks}>Delete All</button>  
      </div>
      <ul className="task-list">
        {tasks.map(task => (
          <li key={task.id} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span>
            <div>
              {/* <button onClick={() => handleCompleteTask(task.id)}>
                {task.completed ? 'Undo' : 'Complete'}
              </button> */}
              <button className='btn2' onClick={() => handleEditTask(task.id)}>Edit</button>
              <button className='btn3' onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      {tasks.length > 0 && (
     <div className="delete-all-container">
     
   </div>   
      )}
    </div>
  );
}

export default App;


