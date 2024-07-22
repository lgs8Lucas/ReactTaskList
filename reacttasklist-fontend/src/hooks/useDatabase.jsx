import { useState, useEffect } from "react";

const useDatabase = (url) => {
  const [data, setData] = useState(null);
  // Configurating method states
  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callSearch, setCallSearch] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);

  const httpCallMethod = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      });
    } else if (method === "DELETE") {
      setConfig({
        method,
        headers: { "Content-type": "application/json" },
      });
      setId(data);
    }
    setMethod(method);
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (er) {
        console.log(er.message);
        setError("Houve algum erro ao carregar os dados");
      }
      setLoading(false);
    };
    getData();
  }, [url, callSearch]);

  useEffect(() => {
    const httpRequest = async () => {
      let json;
      if (method === "POST") {
        let opts = [url, config];
        const res = await fetch(...opts);
        json = await res.json;
      } else if (method === "DELETE") {
        let opts = [url + "/" + id, config];
        const res = await fetch(...opts);
        json = await res.json;
      }
      setCallSearch(json);
    };
    httpRequest();
  }, [config, method, url, id]);

  return { data, httpCallMethod, loading, error };
};

export { useDatabase };