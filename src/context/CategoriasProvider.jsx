import { useState, useEffect, createContext } from 'react';

const CategoriasContext = createContext();

const CategoriasProvider = ({ children }) => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const obtenerCategorias = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const respuesta = await fetch(url);
      const categorias = await respuesta.json();
      console.log(categorias);
      setCategorias(categorias.drinks);
    };
    obtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {children}
    </CategoriasContext.Provider>
  );
};

export { CategoriasProvider };

export default CategoriasContext;
