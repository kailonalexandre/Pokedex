import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100px;
  margin-top: 50px;
  width: 100%;
  height: 100%;
`;

export const List = styled.div`
  width: 100%;
  flex-wrap: wrap;
`;

export const Pokemon = styled.div`
  background-color: var(--white);
  margin: 20px;
  text-align: center;
  border-radius: 20px;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.07);
  position: relative;
  padding: 60px 50px 30px 50px;
  width: 30%;
  margin-top: 40px;
  cursor: pointer;
  transition: 0.3s ease;

  :hover {
    box-shadow: 1px 15px 25px rgba(0, 0, 0, 0.15);
    transform: scale(1.035);
  }

  img {
    position: absolute;
    top: -50px;
    width: 100px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  p {
    color: var(--gray);
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
`;
