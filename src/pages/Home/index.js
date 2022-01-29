import React from "react";
import { Container, Wrapper, Title, Search, Button } from "./style";
import pokeball from "img/pokeball.png";
import PokemonList from "components/_Home/PokemonList";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Title className="flex_cs">
          <h1>Pokedex</h1>
        </Title>
        <Search className="flex_cs">
          <input type="text" placeholder="Digite o nome do seu Pokémon" />
          <Button className="flex_cc">
            <img src={pokeball} alt="" />
          </Button>
        </Search>
        <PokemonList></PokemonList>
      </Wrapper>
    </Container>
  );
};

export default Home;
