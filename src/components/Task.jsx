const Task = ({ taskProp, deleteTask, completeTask }) => {

    const handleDelete = () => {
      deleteTask(taskProp.id)
    }
    const handleCompleted = () => {
      completeTask(taskProp.id)
    }
    return (
      <ul>
        {taskProp.map((task) => (
          <li key={task.id}>
            <p 
            className={task.completed ? "completed" : ""} 
            onClick={handleCompleted}>{task.text}
            </p>
            <button onClick={handleDelete}>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  };

export default Task