import { useState } from "react"

export default function AddTaskForm({addTask}) {
    const [input, setInput] = useState('');

    const handleAddTask = (e) => {
        e.preventDefault()
        addTask(input)
        setInput('')
    }

    return (
        <>
        <form onSubmit={handleAddTask}>
            <input 
            name="task" 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Agregar nueva tarea"
            />
            <button type="submit">Agregar</button>
        </form>
        </>
    )
}