import { handleCor } from "functions/index";
import React from "react";
import { Container, Tipo, Tipos, Wrapper, Medidas } from "./style";

const PokemonSelecionado = (props) => {
  const { pokemonSelecionado, setPokemonSelecionado } = props;

  return (
    <Container>
      <Wrapper>
        <img src={pokemonSelecionado.imagem} alt="" />
        <p>#00{pokemonSelecionado.numero}</p>
        <h1>{pokemonSelecionado.nome}</h1>
        <Tipos>
          {pokemonSelecionado.tipo &&
            pokemonSelecionado.tipo.map((tipo, index) => (
              <Tipo key={index} cor={() => handleCor(tipo)}>
                {tipo}
              </Tipo>
            ))}
        </Tipos>
        <Medidas>
          <div>
            <div className="titulo">Altura</div>
            <div className="medida">{pokemonSelecionado.altura}</div>
          </div>
          <div>
            <div className="titulo">Peso</div>
            <div className="medida">{pokemonSelecionado.peso}</div>
          </div>
        </Medidas>
      </Wrapper>
    </Container>
  );
};

export default PokemonSelecionado;
