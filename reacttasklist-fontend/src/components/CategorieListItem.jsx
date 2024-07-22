import React from 'react'
import style from './CategorieListItem.module.css'

const CategorieListItem = ({id, name, del}) => {
  return (
    <li className={style.list}>
        <p>{id} - {name}</p>
        <button onClick={del}>Apagar</button>
    </li>
  )
}

export default CategorieListItem