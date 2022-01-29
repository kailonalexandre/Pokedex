import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  min-height: 100px;
  margin-top: 50px;
  width: 100%;
`;

export const List = styled.div`
  width: 100%;
`;

export const Pokemon = styled.div`
  margin: 20px;
  background-color: var(--white);
  text-align: center;
  border-radius: 20px;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.07);
  position: relative;
  padding: 60px 80px 30px 80px;
  width: 35%;

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

  span {
    margin: 0px 20px;
    background-color: var(--green);
    border-radius: 5px;
    padding: 2px 15px;
  }
`;
