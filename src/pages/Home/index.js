import PokemonList from "components/_Home/PokemonList";
import pokeball from "img/pokeball.png";
import React, { useState, useEffect } from "react";
import { Button, Container, Search, Title, Wrapper } from "./style";

const Home = () => {
  const [termoDeBusca, setTermoDeBusca] = useState("");
  const [clicou, setClicou] = useState(false);

  const handleInput = (input) => {
    setTermoDeBusca(input.target.value);
  };
  const handleSubmit = (teste) => {
    teste.preventDefault();
    setClicou(true);
  };

  return (
    <Container>
      <Wrapper>
        <Title className="flex_cs">
          <h1>Pokedex</h1>
        </Title>
        <Search className="flex_cs" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite o nome do seu pokemon!"
            onChange={handleInput}
          />
          <Button className="flex_cc" type="submit" onClick={handleSubmit}>
            <img src={pokeball} alt="" />
          </Button>
        </Search>
        <PokemonList
          termoDeBusca={termoDeBusca}
          clicou={clicou}
          setClicou={setClicou}
        />
      </Wrapper>
    </Container>
  );
};

export default Home;
