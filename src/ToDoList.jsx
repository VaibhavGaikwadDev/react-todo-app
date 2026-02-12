import { useEffect, useState } from "react";
export default function ToDoList() {
    const [tasks,setTasks]= useState(["Wake Up","Brush The Teeth"]);
    const [newTasks,setNewTasks]= useState("");

    function handleinput(event){
        setNewTasks(event.target.value);
    }
    function addTask(){
        if(newTasks.trim()!==''){
        setTasks(t=>[...t,newTasks]);
        setNewTasks('');}
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }
    return(<div className="to-do-list">
        <h1>To-Do-List</h1>
        <div>
        <input
         type="text"
         placeholder="Enter The Note"
         value={newTasks}
         onChange={handleinput}
         >
        </input>
        <button
        className="add-task"
        onClick={addTask}
        color="blue"
        >
            Add
        </button>
        <ol>
            {tasks.map((task,index)=>
                <li key={index}> 
                <span 
                className="text"
                type='text'>
                    {task}</span>
                    <button className="delete-task"
                    onClick={()=>deleteTask(index)}
                    >
                        Delete
                    </button>
                
                </li>
            )}
        </ol>
        </div>

    </div>);
};