import styled from "styled-components"

import Burger from "./Burger"

function NavBar() {
  return(
    <NavBarStyled>
      <Title>JM DESIGN &#38; JOINERY</Title>
      <Burger/>
    </NavBarStyled>
  )
}

export default NavBar;

const NavBarStyled = styled.div`
width: 100%;
height: 75px;
background: #051e3a;
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

