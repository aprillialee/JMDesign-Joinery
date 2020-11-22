import styled from "styled-components"

function NavBar() {
  return(
    <NavBarStyled>
      <Title>JM DESIGN &#38; JOINERY</Title>
      <RightMenu>
        <OurStory>OUR STORY</OurStory>
        <OurServices>OUR SERVICES</OurServices>
      </RightMenu>
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
`
const Title = styled.h1`
color: white;
font-size: 1.2vw;
margin-left: 35px;
align-self: center;

@media (max-width: 380px){
display: none;
}
`

const RightMenu = styled.div`
align-self: center;
margin-right: 35px;
display:flex;
color: white;
font-size: 1.2vw;
justify-content: space-between;
`

const OurStory = styled.h1`
color: white;
font-size: 1.2vw;
`

const OurServices = styled.h1`
color: white;
font-size: 1.2vw;
`
