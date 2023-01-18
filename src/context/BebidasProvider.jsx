import { useState, useEffect, createContext } from 'react';

const BebidasContext = createContext();

const BebidasProvider = ({ children }) => {
  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [bebidaId, setBebidaId] = useState('');
  const [receta, setReceta] = useState({});

  useEffect(() => {
    const obtenerRecete = async () => {
      if (!bebidaId) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`;
      const respuesta = await fetch(url);
      const bebida = await respuesta.json();
      setReceta(bebida.drinks[0]);
    };

    obtenerRecete();
  }, [bebidaId]);

  const consultarBebidas = async (busqueda) => {
    const { nombre, categoria } = busqueda;
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
    const respuesta = await fetch(url);
    const bebidas = await respuesta.json();
    setBebidas(bebidas.drinks);
  };

  const handleBebidaId = (id) => {
    setBebidaId(id);
  };

  const hadleModalClick = () => {
    setModal(!modal);
  };

  return (
    <BebidasContext.Provider
      value={{
        consultarBebidas,
        bebidas,
        hadleModalClick,
        modal,
        handleBebidaId,
        receta,
        setReceta,
      }}
    >
      {children}
    </BebidasContext.Provider>
  );
};

export { BebidasProvider };

export default BebidasContext;
