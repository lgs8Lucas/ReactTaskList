import React, { useState } from "react";
import { useDatabase } from "../hooks/useDatabase";
import { dbUrl } from "../data/config.js";
import CategorieListItem from "../components/CategorieListItem.jsx";

import './Categories.css'

const Categories = () => {
  const url = `${dbUrl}/categories`;
  const { data, loading, error, httpCallMethod } = useDatabase(url);
  const [categorieName, setCategorieName] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();
    const categorie = {
      name:categorieName
    }
    httpCallMethod(categorie, 'POST');
    setCategorieName('');
  }
  return (
    <main className="categories">
      <form onSubmit={handleSubmit}>
        <label>
          <h2>Nova categoria</h2>
          <input type="text" name="categorie" required onChange={e => setCategorieName(e.target.value)} value={categorieName}/>
        </label>
        <input type="submit"/>
      </form>
      <h2>Categorias</h2>
      {loading && <p>Carregando</p>}
      {error && (
        <p>Ocorreu um erro ao carregar os dados, tente novamente mais tarde</p>
      )}
      {!loading && !error && data && (
        <ul>
          {data.map((c) => (
            <CategorieListItem
              key={c.id}
              {...c}
              del={(e) => httpCallMethod(c.id, "DELETE")}
            />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Categories;
