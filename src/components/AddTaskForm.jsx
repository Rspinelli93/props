import { useState } from "react"


export default function AddTaskForm({addTask}) {
    const [input, setInput] = useState('');
    return (
        <>
        <form  onSubmit={addTask}>
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