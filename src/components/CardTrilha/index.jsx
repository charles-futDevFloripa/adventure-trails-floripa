import * as PropTypes from 'prop-types';
import './styles.css';
function CardTrilha({ dadosTrilha }) {
  return (
    <div className='card-container'>
      <img className='card-image' src={dadosTrilha.urlImagem} width={200} />
      <h1>{dadosTrilha.nomeTrilha}</h1>
      <span>
        {dadosTrilha.cidade} / {dadosTrilha.estado}
      </span>
    </div>
  );
}

CardTrilha.propTypes = {
  dadosTrilha: PropTypes.exact({
    nomeTrilha: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    duracao: PropTypes.number.isRequired,
    trajeto: PropTypes.number.isRequired,
    dificuldade: PropTypes.string.isRequired,
    tipo: PropTypes.string.isRequired,
    nomeUusario: PropTypes.string.isRequired,
    urlImagem: PropTypes.string.isRequired,
  }),
};

export default CardTrilha;
