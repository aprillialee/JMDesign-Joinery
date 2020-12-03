import styled from "styled-components";

function SkillCard(){
  return(
    <SkillCardStyled>
      <ImageContainer>
        <ImageCover/>
        <img src="./images/kitchen.jpg" alt="a picture of a kitchen"/>
      </ImageContainer>
      <SkillTitle>KITCHENS</SkillTitle>
      <SkillDescription>We fit kitchens to perfection.</SkillDescription>
    </SkillCardStyled>
  )
}

const SkillCardStyled = styled.div`
height: 100%;
width: 200px;
display: flex;
flex-direction: column;
align-items: center;
`

const ImageContainer = styled.div`
width: 100%;
height: 50%;

img{
  width: 100%;
  height: 100%;
}
`

const ImageCover = styled.div`
width: 16%;
height: 17%;
position: absolute;
background: black;
opacity: 25%;
`

const SkillTitle = styled.h1`
font-size: 25px;
text-align: center;
`

const SkillDescription = styled.h2`
font-size: 13px;
margin-top: -8px;
`
export default SkillCard;