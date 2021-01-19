import styled from "styled-components";

import SkillCard from "./SkillCard";

function Services() {
  return (
    <OurServicesStyled>
      <Container>
        <TitleContainer>
          <Title>OUR SERVICES</Title>
          <Subtitle>
            From your dream to completion.
            <br />
            Beautiful craftsmanship, crisp perfection, and honest commitment to
            ensure that whatever your vision, it is executed to magnificence.
          </Subtitle>
        </TitleContainer>
        <SkillsContainer></SkillsContainer>
      </Container>
    </OurServicesStyled>
  );
}

const OurServicesStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0c072c;
  color: white;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  padding-top: 5%;
  margin-top: 5%;
  margin-left: 8%;
`;

const TitleContainer = styled.div`
  width: 90%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
`;
const Title = styled.h1`
  font-size: 4vw;
  color: white;
`;

const Subtitle = styled.div`
  width: 60%;
  margin-top: -1.8%;
  text-align: center;
  font-size: 1.5vw;
`;

const SkillsContainer = styled.div`
  width: 90%;
  height: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8%;
  @media (max-width: 1000px) {
    margin-top: 0px;
    height: 1000px;
  }
`;

export default Services;
