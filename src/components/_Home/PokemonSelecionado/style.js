import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  margin-left: 20px;
  position: sticky;
  top: 0;
`;

export const Wrapper = styled.div`
  background-color: var(--white);
  position: relative;
  text-align: center;
  border-radius: 20px;
  box-shadow: 1px 1px 25px rgb(0 0 0 / 7%);
  padding: 60px 40px 30px 40px;
  width: 100%;
  margin-top: 100px;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;

  .imagem {
    position: absolute;
    top: -100px;
    width: 250px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .numero {
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

  .fraqueza {
    margin: 0;
    background-color: var(--lightBlue);
    border-radius: 20px;
    width: 150px;
    padding: 5px;
    margin: 5px 10px 5px;
  }
`;

export const Fraqueza = styled.div`
  margin-top: 0;
  border-radius: 20px;
  width: 25px;
  height: 25px;
  margin: 0 2px;
  color: red;
  background: ${(props) => props.cor};

  svg {
    color: var(--white);
    height: 12px;
  }
`;

export const Status = styled.div`
  margin-top: 20px;
  display: flex;

  .titulo {
    text-transform: uppercase;
  }

  .atributo {
    margin: 5px;
    background-color: var(--lightBlue);
    border-radius: 20px;
    padding: 5px;

    p {
      background-color: red;
      border-radius: 20px;
      width: 30px;
      height: 30px;
      font-size: 10px;
      color: var(--white);
    }
    span {
      font-size: 12px;
    }
  }
`;

export const Buttons = styled.div`
  background-color: var(--lightBlue);
  height: 70px;
  width: 100%;
  border-radius: 20px;
  margin-top: 50px;
  padding: 10px;

  button {
    width: 50%;
    transition: 0.3s ease;
    height: 90%;
    border-radius: 0 15px 15px 0;

    :hover {
      background-color: var(--white);
    }

    img {
      height: 35px;
      margin: 0 5px;
    }
  }
  .anterior {
    border-radius: 15px 0 0 15px;
  }

  .proximo {
    border-left: 1px solid var(--gray);
    border-radius: 0 15px 15px 0;
  }
`;
