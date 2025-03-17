import './App.css'
import { useState } from 'react'
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
    setTasks(tasks.map(task => 
      task.id === taskId 
      ? {...task, completed: !task.completed} //ejemplo de Toggle - interruptor para cambiar de true a false
      : task)
    )
  }

  const handleAdd = (input) => {
    const maxId = Math.max(...tasks.map(task => task.id));
    const newTask = {
      id: maxId + 1,
      text: input,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <h1>Lista de tareas</h1>
      <AddTaskForm addTask={handleAdd}/>
      <Task taskProp={tasks} deleteTask={handleDelete} completeTask={handleCompleted}/> 
    </>
  );
};

export default App;
