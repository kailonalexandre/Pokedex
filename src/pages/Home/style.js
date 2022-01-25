import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--lightBlue);
  height: 100vh;
  width: 100vw;
`;

export const Wrapper = styled.div`
  height: 100%;
  width: 1200px;
  margin: 0 auto;
`;

export const Title = styled.div`
  background-color: var(--white);
  
  height: 90px;
  width: 100%;
  border-radius: 20px;
  justify-content : flex-start;
  padding-left : 30px;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.07);

  h1 {
      color: var(--black-75);
  }
`;

export const Search = styled.div`
  background-color: var(--white);
  
  height: 60px;
  width: 100%;
  border-radius: 20px;
  justify-content : flex-start;
  padding-left : 30px;
  box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.07);
  margin-top : 20px;

  input{
      border : none;
      height : 100%;
      width : 100%;
      ::placeholder{
        color : var(--black-25);
      }
      
  }

`;
export const Button = styled.div`
background-color: var(--black-50);
  height: 40px;
  width: 40px;
  border-radius: 10px;
  margin-right: 15px;
  color: white;
  cursor: pointer;
  transition: 0.3s ease;

  :hover {
    background-color: var(--red);
    box-shadow: 1px 1px 25px rgba(253, 84, 81, 0.55);
    transform: scale(1.035);
  }

`;