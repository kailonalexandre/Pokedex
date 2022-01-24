import React from "react";
import Menu from "components/menu/index";
import Decoration from "img/Decoration.svg";
import { Banner, Container } from "./style"
// import { useHistory } from☻ "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const LandingPage = () => {
  // const history = useHistory();
  return (
    <div>
      <Container>
        <img src={Decoration} alt="" />
        <Menu></Menu>
        <Banner >
          <h1>
            React Template for your brand new project!
          </h1>
        </Banner>
      </Container>
    </div>
  );
};

export default LandingPage;
