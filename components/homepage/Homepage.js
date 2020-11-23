import styled from "styled-components";

import HomeButton from "./HomeButton";

function HomePage(){
  return(
  <>
  <HomePageStyled>
    <ImageCover/>
    <img src="/images/hallway.jpeg" alt="hallway image"/>
    <HomeFeature>
      <HomeTitle>DESIGN CENTRIC CARPENTRY</HomeTitle>
      <HomeSubtitle>Beautiful craftsmanship for all of your carpentry needs.</HomeSubtitle>
      <HomeButtonStyled>
        <HomeButton label="CONTACT US"/>
        <HomeButton label="GALLERY"/>
      </HomeButtonStyled>
    </HomeFeature>
  </HomePageStyled>
  </>
  )
}

const HomePageStyled = styled.div`
width: 100%;
height: 800px;
display: flex;

img{
  width: 100%;
  height: 100%;
}


@media (max-width: 1000px){
  height: 600px;
}

@media (max-width: 600px){
  height: 400px;
}
`

const ImageCover = styled.div`
width: 100%;
height: 800px;
position: absolute;
background: black;
opacity: 25%;

@media (max-width: 1000px){
  height: 600px;
}

@media (max-width: 600px){
  height: 400px;
}
`

const HomeFeature = styled.div`
width: 39%;
height: 300px;
margin-left: 12.5%;
margin-top: 15%;
position: absolute;
@media (max-width: 1000px) {
  margin-top: 150px;
  width: 45%;
}
`


const HomeButtonStyled = styled.div`
width: 100%;
height: 15%;
display: flex;
flex-flow: row nowrap;
`

const HomeTitle = styled.h1`
font-size: 4.5vw;
color: white;
letter-spacing: 3px;
font-weight: 500;
`

const HomeSubtitle = styled.h2`
font-weight: 300;
width: 80%;
letter-spacing: 0.2vw;
color: white;
margin-top: -35px;
font-size: 1.5vw;

@media (max-width: 1000px) {
  margin-top: -20px;
}

@media (max-width: 1000px) {
  margin-top: -10px;
}
`

export default HomePage;