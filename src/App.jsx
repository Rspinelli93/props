import './App.css'
import { useState, useEffect } from 'react'
import Task from './components/Task'
import AddTaskForm from './components/AddTaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ]);console.log(tasks)

  const handleDelete = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  const handleCompleted = (taskId) => {
    if (task.completed === false) {
      for (let task of tasks) {
        if (task.id === taskId) {
            setTasks(task.completed = true);
        }
    }
    } else {
      for (let task of tasks) {
        if (task.id === taskId) {
            setTasks(task.completed = false);
        }
    }
    }
  }

  const handleAdd = (input) => {
    const maxId = Math.max(...tasks.map(task => task.id));
    setTasks(tasks.push({ id: maxId + 1, text: input , completed: false }))
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTaskForm addTask={handleAdd}/>
      <Task task={tasks} deleteTask={handleDelete} completeTask={handleCompleted}/> 
    </>
  );
};

export default App;
