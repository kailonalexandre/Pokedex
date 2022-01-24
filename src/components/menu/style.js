import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  justify-content: space-between !important;
  .logo {
    margin: 0 80px;
    cursor: pointer;
    font-size: 45px;
    font-family: var(--font);
  }
`;

export const MenuList = styled.div`
  padding-right: 100px;
  width: 50%;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    color: var(--black);
    cursor: pointer;
    font-weight: 700;
    font-size: 24px;
    margin-right: 30px;

    :hover {
      opacity: 0.5;
    }

    li {
      font-family: var(--font2);
    }
  }
`;
