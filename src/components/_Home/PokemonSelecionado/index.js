import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleCor, handleIcons, somarStatus } from "functions/index";
import React from "react";
import {
  Buttons,
  Container,
  Fraqueza,
  Medidas,
  Status,
  Tipo,
  Tipos,
  Wrapper,
} from "./style";

const PokemonSelecionado = (props) => {
  const {
    pokemonSelecionado,
    setPokemonSelecionado,
    pokemonsSalvos,
    setPokemonsSalvos,
    pokemons,
    setPokemons,
  } = props;

  const handlePokemons = (direcao) => {
    const index = pokemonSelecionado.numero - 1;

    if (direcao === "proximo") {
      if (index + 1 < pokemons.length) {
        setPokemonSelecionado(pokemons[index + 1]);
        setPokemonsSalvos({
          anterior: pokemonSelecionado,
          proximo: pokemons[index + 2],
        });
      }
    } else {
      if (index !== 0) {
        setPokemonSelecionado(pokemons[index - 1]);
        setPokemonsSalvos({
          anterior: pokemons[index - 2],
          proximo: pokemonSelecionado,
        });
      }
    }
  };

  return (
    <Container name="container">
      <Wrapper name="wrapper">
        <img src={pokemonSelecionado.imagem} className="imagem" alt="" />
        <p className="numero">#00{pokemonSelecionado.numero}</p>
        <h1>{pokemonSelecionado.nome}</h1>
        <Tipos name="tipo">
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
        <Medidas>
          <div>
            <div className="titulo">Fraquezas</div>
            <div className="fraqueza flex_cc">
              {pokemonSelecionado.fraquezas &&
                pokemonSelecionado.fraquezas.map((fraq, index) => (
                  <Fraqueza
                    key={index}
                    cor={() => handleCor(fraq)}
                    className="flex_cc"
                  >
                    <FontAwesomeIcon icon={handleIcons(fraq)} />
                  </Fraqueza>
                ))}
            </div>
          </div>
          <div>
            <div className="titulo">Experiência</div>
            <div className="medida">{pokemonSelecionado.peso}</div>
          </div>
        </Medidas>
        <Status className="flex_cc">
          <div>
            <div className="titulo">Status</div>
            <div className="status flex_cc">
              <div className="atributo">
                <p className="flex_cc" style={{ backgroundColor: "#D12C2C" }}>
                  HP
                </p>
                <span>{pokemonSelecionado.status?.vida}</span>
              </div>
              <div className="atributo">
                <p className="flex_cc" style={{ backgroundColor: "#fd7d24" }}>
                  ATK
                </p>
                <span>{pokemonSelecionado.status?.ataque}</span>
              </div>
              <div className="atributo">
                <p className="flex_cc" style={{ backgroundColor: "#eed535" }}>
                  DEF
                </p>
                <span>{pokemonSelecionado.status?.defesa}</span>
              </div>
              <div className="atributo">
                <p className="flex_cc" style={{ backgroundColor: "#51c4e7" }}>
                  ATS
                </p>
                <span>{pokemonSelecionado.status?.ataqueEspecial}</span>
              </div>
              <div className="atributo">
                <p className="flex_cc" style={{ backgroundColor: "#9bcc50" }}>
                  DFS
                </p>
                <span>{pokemonSelecionado.status?.defesaEspecial}</span>
              </div>
              <div className="atributo">
                <p className="flex_cc" style={{ backgroundColor: "#f366b9" }}>
                  VEL
                </p>
                <span>{pokemonSelecionado.status?.velocidade}</span>
              </div>
              <div className="atributo">
                <p className="flex_cc" style={{ backgroundColor: "#4592c4" }}>
                  TOT
                </p>
                <span>{somarStatus(pokemonSelecionado.status)}</span>
              </div>
            </div>
          </div>
        </Status>
        <Buttons name="buttons" className="flex_cc">
          <button
            className="flex_cc anterior"
            onClick={() => handlePokemons("anterior")}
          >
            <img src={pokemonsSalvos?.anterior?.imagem} alt="" />
            <p>{pokemonsSalvos?.anterior?.nome}</p>
          </button>
          <button
            className="flex_cc proximo"
            onClick={() => handlePokemons("proximo")}
          >
            <p>{pokemonsSalvos?.proximo?.nome}</p>
            <img src={pokemonsSalvos?.proximo?.imagem} alt="" />
          </button>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default PokemonSelecionado;
