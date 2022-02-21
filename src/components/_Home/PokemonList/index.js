import React, { useState, useEffect } from "react";
import { Container, List, Pokemon, Tipos, Tipo } from "./style";
import api from "connection/index";
import { handleCor } from "functions";

const PokemonList = (props) => {
  const { termoDeBusca, clicou, setClicou, setPokemonSelecionado } = props;
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getTodosPokemons(termoDeBusca);
  }, []);

  useEffect(() => {
    clicou && getTodosPokemons(termoDeBusca);
    setClicou(false);
  }, [clicou]);

  const getTodosPokemons = async (termoDeBusca) => {
    await api
      .get(`/pokemon?nome=${termoDeBusca}`)
      .then((res) => {
        setPokemons(res.data.pokemons);
        res.data.pokemons.length > 0 &&
          setPokemonSelecionado(res.data.pokemons[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <List className="flex_cc">
        {pokemons.slice(0, 6).map((pokemon, index) => (
          <Pokemon key={index} onClick={() => setPokemonSelecionado(pokemon)}>
            <img src={pokemon.imagem} alt="" />
            <p>N00{pokemon.numero}</p>
            <h1> {pokemon.nome}</h1>
            <Tipos>
              {pokemon.tipo.map((tipo, index) => (
                <Tipo key={index} cor={() => handleCor(tipo)}>
                  {tipo}
                </Tipo>
              ))}
            </Tipos>
          </Pokemon>
        ))}
      </List>
    </Container>
  );
};

export default PokemonList;
