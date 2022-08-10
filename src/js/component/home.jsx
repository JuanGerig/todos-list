import React, { useEffect, useState } from "react";

const ToDoList = () => {
	const [task, setTask] = useState({label: "",done:false})
	const [list, setList] = useState([]) 
	const handleTask = (event) => {
		event.preventDefault(),
		setTask({...task, label: event.target.value})
	}
	const saveTask = () => {
		setList([...list, task])
	}
	const removeTask = (id) => {
		let newList = list.filter((tarea, index)=>{
			return (
				id != index
			)
		})
		setList(newList)
	}
	return (
		<form onSubmit={handleTask}>
			<div className="body">
			<h1 className="header">TODOS LIST</h1>
			<div className="input-save">
			<input placeholder="agrega una nueva tarea" value={task.label}name="task"onChange={handleTask}/>
			<button className= "save-button" onClick = {saveTask}>Save</button>
			</div>
			{list.map((tarea, index) => {
				return(
					<div className="list-added">
						<p key={index}>{tarea.label}</p>
							<button className="r-button" key={index} onClick={()=>removeTask(index)}>X</button>
					</div>
				)
			})}
			</div>
		</form>
	)
}
export default ToDoList;
