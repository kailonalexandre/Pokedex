import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  margin-left: 20px;
`;

export const Wrapper = styled.div`
  background-color: var(--white);
  position: relative;
  text-align: center;
  border-radius: 20px;
  box-shadow: 1px 1px 25px rgb(0 0 0 / 7%);
  padding: 60px 40px 30px 40px;
  width: 100%;
  height: 700px;
  margin-top: 100px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;

  img {
    position: absolute;
    top: -100px;
    width: 250px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  p {
    margin-top: 70px;
    color: var(--gray);
  }

  h1 {
    font-size: 25px;
  }
`;

export const Tipos = styled.div`
  margin-top: 10px;
`;

export const Tipo = styled.span`
  margin: 0 10px;
  background: ${(props) => props.cor};
  border-radius: 5px;
  padding: 2px 15px;
  font-size: 14px;
`;

export const Medidas = styled.div`
  margin-top: 20px;
  display: flex;

  .titulo {
    text-transform: uppercase;
  }

  .medida {
    background-color: var(--lightBlue);
    border-radius: 20px;
    width: 150px;
    padding: 5px;
    margin: 5px 10px 5px;
  }
`;
