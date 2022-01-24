import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  img { 
    position: absolute;
    right: 0;
    z-index: -2;
    height: 95vh;
  }

`;
export const Banner = styled.div`
    margin: 0 80px;
    position: relative;
    height: calc(100% - 100px);
    
   h1 {
    position: absolute;
    color: #ffd700;
    font-size: 100px;
    top: calc(50% - 250px);
    font-family: var(--font);
    mix-blend-mode: difference;
    text-shadow: 5px 4px 0px rgb(0 0 0 / 10%);

  }
`;

