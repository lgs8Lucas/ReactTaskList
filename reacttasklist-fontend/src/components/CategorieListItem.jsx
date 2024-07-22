import React from 'react'
import style from './CategorieListItem.module.css'

const CategorieListItem = (props) => {
  return (
    <li className={style.list}>
        <p>{props.id} - {props.name}</p>
        <button>Apagar</button>
    </li>
  )
}

export default CategorieListItem