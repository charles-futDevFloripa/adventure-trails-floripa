import * as PropTypes from 'prop-types';
function CardTrilha({ dadosTrilha }) {
  return (
    <>
      <h1>{dadosTrilha.nomeTrilha}</h1>
      <span>
        {dadosTrilha.cidade} / {dadosTrilha.estado}
      </span>
      <img src={dadosTrilha.urlImagem} height={300} />
    </>
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
