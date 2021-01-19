import { loadGetInitialProps } from "next/dist/next-server/lib/utils";
import styled from "styled-components";

function SkillCard(props) {
  return (
    <SkillCardStyled>
      <ImageContainer>
        <img src={props.image} />
      </ImageContainer>
      <SkillTitle>{props.skill}</SkillTitle>
      <SkillDescription>{props.description}</SkillDescription>
    </SkillCardStyled>
  );
}

const SkillCardStyled = styled.div`
  height: 100%;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 769px) {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }

  @media (max-width: 769px) {
    height: 100%;
  }
`;

const ImageCover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: black;
  opacity: 25%;
`;

const SkillTitle = styled.h1`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
`;

const SkillDescription = styled.h2`
  font-size: 13px;
  margin-top: -8px;
  font-weight: 400;
`;
export default SkillCard;
