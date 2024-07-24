import React from "react";
import style from "./TaskListItem.module.css";
import { dbUrl } from "../data/config";

const TaskListitem = ({ task, description, completed, date, httpCallMethod, id, categorie }) => {
  const fDate = new Date(date).toLocaleString("pt-BR", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const handleCheck = () => {
    const newCompleted = !completed;
    const newTask = {
        task,
        id,
        description,
        completed: !completed,
        date,
        categorie
        
    }
    httpCallMethod(newTask, 'PUT');
  };

  const handleDelete = () =>{
    httpCallMethod(id, 'DELETE')
  }
  return (
    <li className={style.item} >
      <div className={style.list_header}>
        <h3>{task}</h3>
        <div>
        <span>{fDate}</span>
        <button onClick={handleDelete}>Apagar</button>
        </div>
      </div>
      <div className={style.list_body}>
        <input type="checkbox" checked={completed} onChange={handleCheck} />
        <p>{description}</p>
      </div>
    </li>
  );
};

export default TaskListitem;
