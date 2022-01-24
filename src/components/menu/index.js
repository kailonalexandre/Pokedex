import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Header, List, MenuList } from "./style";

const Menu = () => {
  return (
    <Header className="flex_cc">
      <div className="logo">Test.io</div>
      <MenuList className="flex_ce">
        <List className="flex_cc">
          <a href="/">
            <li>Home</li>
          </a>
          <a href="/">
            <li>About</li>
          </a>
          <a href="/">
            <li>Prices</li>
          </a>
          <a href="/">
            <li>Contact</li>
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faUser} />
          </a>
        </List>
      </MenuList>
    </Header>
  );
};

export default Menu;
