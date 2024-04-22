import CardTrilha from './components/CardTrilha';
import './App.css';
function App() {
  const listaTrilhas = [
    {
      nomeTrilha: 'Trilha da Costa da Lagoa',
      cidade: 'Floripa',
      estado: 'SC',
      duracao: 120,
      trajeto: 4,
      dificuldade: 'Iniciante',
      tipo: 'caminhada / trekking',
      nomeUusario: 'João Ninguem',
      urlImagem:
        'https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg',
    },
  ];

  return (
    <div className='container'>
      <h1 className='titulo'>Explore nossas trilhas</h1>
      {listaTrilhas.map((trilha, index) => (
        <CardTrilha dadosTrilha={trilha} key={index} />
      ))}
    </div>
  );
}
export default App;
