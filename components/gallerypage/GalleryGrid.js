import styled from "styled-components";

function GalleryGrid() {
  return (
    <GalleryGridStyled>
      <GridItem1>
        <img src="/images/upstairs.jpg" />
      </GridItem1>
      <GridItem2>
        <img src="/images/altar.jpg" />
      </GridItem2>
      <GridItem3>
        <img src="/images/hallway.jpeg" />
      </GridItem3>
      <GridItem4>
        <img src="/images/boat-interior.jpg" />
      </GridItem4>
      <GridItem5>
        <img src="/images/garden2.jpg" />
      </GridItem5>
      <GridItem6>
        <img src="/images/upstairs2.jpg" />
      </GridItem6>
    </GalleryGridStyled>
  );
}

const GalleryGridStyled = styled.div`
  width: 100%;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 8px;
  grid-row-gap: 8px;

  @media (max-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    height: 100%;
  }
`;

const GridItem1 = styled.div`
  grid-area: 1 / 1 / 5 / 3;

  img {
    width: 100%;
    height: 100%;
  }
`;

const GridItem2 = styled.div`
  grid-area: 1 / 3 / 3 / 5;

  img {
    width: 100%;
    height: 100%;
  }
`;
const GridItem3 = styled.div`
  grid-area: 3 / 3 / 5 / 5;

  img {
    width: 100%;
    height: 100%;
  }
`;

const GridItem4 = styled.div`
  grid-area: 1 / 5 / 5 / 8;

  img {
    width: 100%;
    height: 100%;
  }
`;

const GridItem5 = styled.div`
  grid-area: 5 / 1 / 8 / 6;

  img {
    width: 100%;
    height: 100%;
  }
`;

const GridItem6 = styled.div`
  grid-area: 5 / 6 / 8 / 8;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default GalleryGrid;
