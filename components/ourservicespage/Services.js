import styled from "styled-components";

function Services() {
  return (
    <OurServicesStyled>
      <Container>
        <Title>
          OUR SERVICES
        </Title>
      </Container>
    </OurServicesStyled>
  )
}

const OurServicesStyled = styled.div`
width: 100vw;
height: 100vh;
background: #0C072C;
margin-top: -25px;
color: white;
display: flex;
justify-content: center;
`

const Container = styled.div`
width: 80vw;
height: 80vh;
align-self: center;
display: flex;
justify-content: center;
padding-top: 5%;
`
const Title = styled.div`
font-size: 4vw;
color: white;

`
export default Services;