import styled from "styled-components";

function HomeButton(props) {
  return (
    <Button>
      <ButtonText>{props.label}</ButtonText>
    </Button>
  );
}

const Button = styled.button`
  background: #0c072c;
  width: 30%;
  height: 80%;
  border-radius: 5px;
  border: none;
  margin-right: 60px;
  outline: none;
  cursor: pointer;

  @media (max-width: 600px) {
    display: none;
  }
`;

const ButtonText = styled.label`
  color: white;
  font-size: 1.5vw;
  cursor: pointer;
`;

export default HomeButton;
