import React, { useState, useEffect } from "react";
import { Container, List, Pokemon, Tipos, Tipo } from "./style";
import api from "connection/index";

const PokemonList = (props) => {
  const { termoDeBusca, clicou, setClicou } = props;
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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCor = (tipo) => {
    switch (tipo) {
      case "Grama":
        return "#9bcc50";
      case "Veneno":
        return "#b97fc9";
      case "Fogo":
        return "#fd7d24";
      case "Agua":
        return "#4592c4";
      case "Inseto":
        return "#729f3f";
      case "Normal":
        return "#a4acaf";
      case "Voador":
        return "linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%)";
    }
  };

  return (
    <Container>
      <List className="flex_cc">
        {pokemons.map((pokemon, index) => (
          <Pokemon key={index}>
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
