import styled from "styled-components";

function HomePage(){
  return(
  <>
  <HomePageStyled>
    <ImageCover/>
    <img src="/images/hallway.jpeg" alt="hallway image"/>
  </HomePageStyled>
  </>
  )
}

const HomePageStyled = styled.div`
width: 100%;
height: 800px;

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
opacity: 30%;

@media (max-width: 1000px){
  height: 600px;
}

@media (max-width: 600px){
  height: 400px;
}
`

export default HomePage;