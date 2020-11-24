import styled from "styled-components"

import Burger from "./Burger"

function NavBar() {
  return(
    <NavBarStyled>
      <Title>JM DESIGN &#38; JOINERY</Title>
      <LogoContainer>
        <Logo src="./images/logo.png" alt="Logo"/>
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
margin-left: 45%;
position: absolute;

@media (max-width: 1000px){
width: 80px;
height: 80px;
}

@media (max-width: 450px){
  margin-left: 40%;
}
`

const Logo = styled.img`
width: 100%;
height: 100%;
`

