import React from 'react'
import style from './TaskListItem.module.css'

const TaskListitem = ({task, description, completed, date}) => {
    const handleCheck = () => {

    }
    const fDate = new Date(date).toLocaleString("pt-BR", {year:'numeric', month:'numeric', day:'numeric'})
  return (
    <li className={style.item}>
        <div className={style.list_header}>
        <h3>{task}</h3>
        <span>{fDate}</span>
        </div>
        <div className={style.list_body}>
        <input type="checkbox" checked={completed} onChange={handleCheck} />
        <p>{description}</p>
        </div>
    </li>
  )
}

export default TaskListitem