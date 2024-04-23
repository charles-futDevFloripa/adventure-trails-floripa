import { createContext, useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';

export const TrilhasContext = createContext();
export const TrilhasContextProvider = ({ children }) => {
  const [dados, isLoading] = useFetch('../data/dados.json');
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    if (!!dados) {
      setTrilhas(dados.trilhas);
    }
  }, [dados]);
  return (
    <TrilhasContext.Provider value={{ trilhas, setTrilhas }}>
      {children}
    </TrilhasContext.Provider>
  );
};
