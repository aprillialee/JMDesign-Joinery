import styled from "styled-components";

function OurStoryPage() {
  return (
    <OurStoryStyled>
      <OurStoryContainer>
        <OurStoryImages>
          <img src="/images/wood.jpg" />
        </OurStoryImages>
        <OurStoryTextContainer>
          <Title>OUR STORY</Title>
          <OurStoryText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            tincidunt et libero in sagittis. Sed id volutpat turpis, sit amet
            convallis ante. In placerat nulla non vestibulum auctor. Etiam et
            nibh condimentum dolor pulvinar sollicitudin. Pellentesque non
            ultrices ipsum. Cras nec elit eu dui auctor tristique. Vestibulum ex
            enim, mattis eu nunc id, viverra bibendum erat. <br />
            Nunc suscipit quis turpis sit amet imperdiet. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Etiam ut purus sollicitudin,
            venenatis erat non, suscipit urna. Maecenas tempor metus in commodo
            pretium. Proin volutpat vel magna nec tristique.
          </OurStoryText>
        </OurStoryTextContainer>
        <OurStoryImages>
          <img src="/images/wood.jpg" />
        </OurStoryImages>
      </OurStoryContainer>
    </OurStoryStyled>
  );
}

const OurStoryStyled = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin-top: 100px;
`;

const OurStoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const OurStoryTextContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-bottom: 50px;
  padding-top: 50px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  color: #0c072c;
  padding: 0;
  margin: 0 0 0px;
  font-weight: 500;
  text-align: center;
  font-weight: 400;

  @media (max-width: 768px) {
    line-height: 50px;
    padding-bottom: 10px;
  }
`;

const OurStoryImages = styled.div`
  height: 100%;
  width: 25%;
  overflow: hidden;
  background: red;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const OurStoryText = styled.p`
  width: 50%;
`;

export default OurStoryPage;
