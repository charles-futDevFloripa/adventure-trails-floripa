import { useEffect, useState } from 'react';

function useFetch(url) {
  const [dados, setDados] = useState();

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log('Dados recebidos:', data); // Verifique os dados no console
        setDados(data);
      })
      .catch((error) => console.log(error));
  }, [url]);
  return dados;
}
export default useFetch;
