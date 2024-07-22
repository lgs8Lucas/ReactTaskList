import React from "react";
import { useDatabase } from "../hooks/useDatabase";
import { dbUrl } from "../data/config.js";
import CategorieListItem from "../components/CategorieListItem.jsx";
const Categories = () => {
  const url = `${dbUrl}/categories`;
  const { data, loading, error, httpCallMethod } = useDatabase(url);
  return (
    <main className="categories">
      <h2>Categorias</h2>
      {loading && <p>Carregando</p>}
      {error && (
        <p>Ocorreu um erro ao carregar os dados, tente novamente mais tarde</p>
      )}
      {!loading && !error && data && (
        <ul>
          {data.map((c) => (
            <CategorieListItem key={c.id} {...c} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Categories;
