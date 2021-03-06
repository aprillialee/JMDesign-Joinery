import styled from "styled-components";

import SkillCard from "./SkillCard";

function Services() {
  return (
    <>
      <OurServicesStyled>
        <Container>
          <TitleContainer>
            <Title>OUR SERVICES</Title>
            <Subtitle>
              From your dream to completion.
              <br />
              Beautiful craftsmanship, crisp perfection, and honest commitment
              to ensure that whatever your vision, <br /> it is executed to
              magnificence.
            </Subtitle>
          </TitleContainer>
          <SkillsContainer>
            <SkillCard
              skill="KITCHENS"
              image="/images/kitchen.jpg"
              description="Our joiners have over 30 years experience in building kitchens. Make your favourite meals in your ideal kitchen"
            />
            <SkillCard
              skill="HOME OFFICES"
              image="/images/houses.jpg"
              description="With remote working growing exponentionally over the past year, your workspace dream is only a phone call away"
            />
            <SkillCard
              skill="LANDSCAPES"
              image="/images/garden.jpg"
              description="Breathe in the fresh air in a beautiful landscape that is designed to bring you calm and happiness"
            />
            <SkillCard
              skill="BOATS"
              image="/images/boat.jpg"
              description="Enjoy your boat knowing that it has been fixed by expert craftspeople with over 30 years experience"
            />
          </SkillsContainer>
        </Container>
      </OurServicesStyled>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1443 136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1443 0H0V97.2956C0 117.234 264.5 173.397 748 97.2956C1028.06 53.2146 1181.52 46.6617 1443 97.2956V0Z"
          fill="#0C072C"
        />
      </svg>
    </>
  );
}

const OurServicesStyled = styled.div`
  width: 100vw;
  height: 100%;
  background: #0c072c;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 50px;
  padding-top: 80px;
  height: 80%;
`;

const TitleContainer = styled.div`
  width: 90%;
  height: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;
const Title = styled.h1`
  font-size: 50px;
  color: white;
  padding: 0;
  margin: 0 0 0px;
  font-weight: 400;
  text-align: center;
  @media (max-width: 768px) {
    line-height: 50px;
    padding-bottom: 10px;
  }
`;

const Subtitle = styled.p`
  width: 50%;
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 15px;
  font-weight: 400;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SkillsContainer = styled.div`
  width: 90%;
  height: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 1000px) {
    margin-top: 0px;
    flex-flow: wrap;
  }
`;

export default Services;
