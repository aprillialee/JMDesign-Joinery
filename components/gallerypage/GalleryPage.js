import styled from "styled-components";

import GalleryGrid from "./GalleryGrid";

function GalleryPage() {
  return (
    <GalleryPageStyled>
      <GalleryContainer>
        <Title>GALLERY</Title>
        <GalleryGrid />
      </GalleryContainer>
    </GalleryPageStyled>
  );
}

const GalleryPageStyled = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GalleryContainer = styled.div`
  width: 70%;
  height: 600px;
  display: flex;
  justify-content: center;
  flex-flow: column nowrap;
`;

const Title = styled.h1`
  font-size: 50px;
  color: black;
  padding: 0;
  margin: 150px 0px 30px 0px;
  font-weight: 500;
  text-align: center;
  @media (max-width: 768px) {
    line-height: 50px;
    padding-bottom: 10px;
  }
`;

export default GalleryPage;
