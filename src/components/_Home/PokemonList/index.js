import React, { useState, useEffect } from "react";
import { Container, List, Pokemon, Tipos, Tipo } from "./style";
import { handleCor } from "functions/index";
import api from "connection/index";

const PokemonList = (props) => {
  const {
    termoDeBusca,
    clicou,
    setClicou,
    setPokemonSelecionado,
    pokemonsSalvos,
    setPokemonsSalvos,
    pokemons,
    setPokemons,
  } = props;

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
        if (res.data.pokemons.length > 0) {
          setPokemonSelecionado(res.data.pokemons[0]);
          setPokemonsSalvos({
            ...pokemonsSalvos,
            proximo: res.data.pokemons[1],
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlePokemons = (pokemon, index) => {
    setPokemonSelecionado(pokemon);
    if (index === 0) {
      setPokemonsSalvos({ proximo: pokemons[index + 1] });
      return;
    }

    if (index + 1 === pokemons.length) {
      setPokemonsSalvos({
        anterior: pokemons[index - 1],
      });
      return;
    }

    setPokemonsSalvos({
      anterior: pokemons[index - 1],
      proximo: pokemons[index + 1],
    });
  };

  return (
    <Container name="container">
      <List name="list" className="flex_cc">
        {pokemons.map((pokemon, index) => (
          <Pokemon
            name="pokemon"
            key={index}
            onClick={() => handlePokemons(pokemon, index)}
          >
            <img src={pokemon.imagem} alt="" />
            <p>N00{pokemon.numero}</p>
            <h1> {pokemon.nome}</h1>
            <Tipos name="tipo">
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
