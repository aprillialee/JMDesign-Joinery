import styled from "styled-components";

import Link from "next/link";

import Burger from "./Burger";

function NavBar() {
  return (
    <NavBarStyled>
      <Title>JM DESIGN &#38; JOINERY</Title>
      <LogoContainer>
        <Link href="/">
          <img src="./images/logo.png" alt="Logo" />
        </Link>
      </LogoContainer>
      <Burger />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75px;
  background: #0c072c;
  box-shadow: 0.5px 0.5px 2px;
  position: fixed;
  z-index: 20;

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`;

const Title = styled.h1`
  width: 300px;
  color: white;
  font-size: 15px;
  align-self: center;
  padding-left: 25px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const LogoContainer = styled.div`
  width: 120px;
  height: 120px;
  margin: 0px auto 0px auto;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    margin: 0;
    width: 75px;
    height: 75px;
  }
`;

export default NavBar;
/*const BurgerStyled = styled.div`
  display: flex;
  align-self: center;
  align-content: center;
  width: 300px;
  height: 100%;
  padding-right: 25px;
  z-index: 50;
`;*/
