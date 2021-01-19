import styled from "styled-components";

import HomeButton from "./HomeButton";

function HomePage() {
  return (
    <>
      <HomePageStyled>
        <ImageCover />
        <img src="/images/shed.jpg" alt="hallway image" />
        <HomeFeature>
          <HomeTitle>DESIGN CENTRIC CARPENTRY</HomeTitle>
          <HomeSubtitle>
            Beautiful craftsmanship for all of your carpentry needs.
          </HomeSubtitle>
          <HomeButtonStyled>
            <HomeButton label="CONTACT US" />
            <HomeButton label="GALLERY" />
          </HomeButtonStyled>
        </HomeFeature>
      </HomePageStyled>
    </>
  );
}

const HomePageStyled = styled.div`
  width: 100%;
  height: 700px;
  display: flex;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1000px) {
    height: 600px;
  }

  @media (max-width: 600px) {
    height: 400px;
  }
`;

const ImageCover = styled.div`
  width: 100%;
  height: 700px;
  position: absolute;
  background: black;
  opacity: 25%;

  @media (max-width: 1000px) {
    height: 600px;
  }

  @media (max-width: 600px) {
    height: 400px;
  }
`;

const HomeFeature = styled.div`
  width: 55%;
  height: 300px;
  align-self: center;
  position: absolute;
  margin-left: 100px;
  margin-top: 110px;

  @media (max-width: 1024px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    margin-left: 50px;
    margin-top: 180px;
  }
`;

const HomeButtonStyled = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  flex-flow: row nowrap;
`;

const HomeTitle = styled.h1`
  font-size: 70px;
  line-height: 80px;
  color: white;
  font-weight: 500;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 50px;
  }
`;

const HomeSubtitle = styled.h2`
  font-weight: 300;
  width: 80%;
  color: white;
  padding: 0;
  margin: 0 0 30px 0;
  font-size: 20px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export default HomePage;
