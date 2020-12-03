import styled from "styled-components"

import Link from 'next/link'

import Burger from "./Burger"

function NavBar() {
  return(
    <NavBarStyled>
      <Link href="/">
      <a><Title>JM DESIGN &#38; JOINERY</Title></a>
      </Link>
      <LogoContainer>
        <Link href="/">
        <a><Logo src="./images/logo.png" alt="Logo"/></a>
        </Link>
      </LogoContainer>
      <Burger/>
    </NavBarStyled>
  )
}

export default NavBar;

const NavBarStyled = styled.div`
width: 100%;
height: 75px;
background: #0C072C;
box-shadow: 2px 2px 20px;
display: flex;
justify-content: space-between;
position: fixed;
z-index: 18;

a {
  display: flex;
}
`
const Title = styled.h1`
color: white;
font-size: 1.2vw;
margin-left: 35px;
align-self: center;


@media (max-width: 800px){
display: none;
}
`

const LogoContainer = styled.div`
width: 150px;
height: 150px;
margin-left: 45.5%;
position: absolute;

@media (max-width: 1000px){
width: 75px;
height: 75px;
margin-left: 2%;
margin-top: 0.5%;
}
`

const Logo = styled.img`
width: 100%;
height: 100%;
`

