import styled from "styled-components";

function HomeButton(props){
  return(
    <Button>
      <ButtonText>{props.label}</ButtonText>
    </Button>
  )
}


const Button = styled.button`
background: #0C072C;
width: 30%;
height: 80%;
border-radius: 5px;
box-shadow: 0.1px 0.1px 15px;
border: none;
margin-right: 60px;

@media (max-width: 1000px){
 display: none;
}
`

const ButtonText = styled.label`
color: white;
font-size: 18px;
`


export default HomeButton;