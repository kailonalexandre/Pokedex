import React, { useState, useEffect } from "react";
import { Container, List, Pokemon, Tipos } from "./style";
import api from "connection/index";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getTodosPokemons();
  }, []);

  const getTodosPokemons = async () => {
    await api
      .get(`/pokemon`)
      .then((res) => {
        setPokemons(res.data.pokemons);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container>
      <List className="flex_cs">
        {pokemons.map((pokemon, index) => (
          <Pokemon key={index}>
            <img src={pokemon.imagem} alt="" />
            <p>N00{pokemon.numero}</p>
            <h1> {pokemon.nome}</h1>
            <Tipos>
              {pokemon.tipo.map((tipo, index) => (
                <span key={index}>{tipo}</span>
              ))}
            </Tipos>
          </Pokemon>
        ))}
      </List>
    </Container>
  );
};

export default PokemonList;
