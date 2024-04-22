import CardTrilha from './components/CardTrilha';
import './App.css';
import useFetch from './hooks/useFetch';
import { useEffect, useState } from 'react';
function App() {
  const dados = useFetch('/dados.json');
  const [trilhas, setTrilhas] = useState([]);
  useEffect(() => {
    console.log('Dados no App:', dados);
    if (!!dados) {
      setTrilhas(dados.trilhas);
    }
  }, [dados]);

  return (
    <>
      <div className='container'>
        <h1 className='titulo'>Explore nossas trilhas</h1>
      </div>
      {Array.isArray(trilhas) &&
        trilhas.map((trilha, index) => (
          <CardTrilha dadosTrilha={trilha} key={index} />
        ))}
    </>
  );
}
export default App;
