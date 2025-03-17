const Task = ({ task, deleteTask, completeTask }) => {
    return (
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            <p className={task.completed ? "completed" : ""} onClick={() => completeTask(task.id)}>{task.text}</p>
            <button className="eliminateButton" onClick={() => deleteTask(task.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  };

export default Task