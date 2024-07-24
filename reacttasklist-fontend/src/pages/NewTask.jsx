import React, { useState } from "react";
import { useDatabase } from "../hooks/useDatabase";
import { dbUrl } from "../data/config";
import { Link, useNavigate } from "react-router-dom";

import './NewTask.css'

const urlTask = dbUrl + "/" + "tasks";
const urlCategories = dbUrl + "/" + "categories";

const NewTask = () => {
  const navigate = useNavigate();
  const {
    httpCallMethod: tasksCallMethod,
    loading: loadingTasks,
    error: tasksError,
  } = useDatabase(urlTask);

  const {
    data: categories,
    loading: loadingCategories,
    error: categoriesError,
  } = useDatabase(urlCategories);

  const [form, setForm] = useState({
    task:'',
    categorie:'',
    description:''
  })

  const handleSubmit = async (e) =>{
    e.preventDefault()
    const task = {
      ...form,
      completed: false,
      date: new Date()
    }
    await tasksCallMethod(task, 'POST');
    if(!tasksError) navigate('/');
  }

  return (
    <form className="newTask" onSubmit={handleSubmit}>
      <h2>Nova Task</h2>
      <label>
        <span>Task</span>
        <input type="text" required onChange={e => setForm({...form, task:e.target.value})} value={form.task}/>
      </label>
      <label>
        <span>Descrição detalhada</span>
        <input type="text" required onChange={e => setForm({...form, description:e.target.value})} value={form.description}/>
      </label>
      <label>
        <span>Categoria</span>
        {loadingCategories ? (
          <span>Carregando categorias...</span>
        ) : categoriesError ? (
          <span>Erro ao carregar categorias, tente novamente...</span>
        ) : categories && categories.length == 0? <span>Você ainda não possui categorias cadastradas, <Link to='/categories'>Cadastre já</Link></span> : (
          <select onChange={e => setForm({...form, categorie:e.target.value})} value={form.categorie}>
            {categories &&
              categories.map((c) => (
                <option key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
          </select>
        )}
      </label>
      <input type="submit" value={'Criar'} />
    </form>
  );
};

export default NewTask;
