import styled from "styled-components";

function ContactUsForm() {
  return (
    <ContactUsFormStyled>
      <Title>Contact Us</Title>
      <Subtitle>
        We would love to hear from you, please drop us a line if you have a
        query!
      </Subtitle>
      <NameContainer>
        <NameInput placeholder="First Name" />
        <NameInput placeholder="Last Name" />
      </NameContainer>
      <EmailContainer>
        <EmailInput placeholder="Please Enter Your Email" />
      </EmailContainer>
      <EmailContainer>
        <EmailInput placeholder="Please Enter Your Subject" />
      </EmailContainer>
      <MessageContainer>
        <MessageInput placeholder="Please Enter Your Message" />
      </MessageContainer>
      <SubmitButton>SUBMIT</SubmitButton>
    </ContactUsFormStyled>
  );
}

const ContactUsFormStyled = styled.div`
  width: 400px;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  color: white;
  padding: 0;
  margin: 0 0 0px;
  font-weight: 400;
  text-align: center;
  letter-spacing: 4.5px;
  @media (max-width: 768px) {
    line-height: 50px;
    padding-bottom: 10px;
    font-size: 50px;
  }
`;

const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: white;
  margin: 0 0 20px 0;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

const NameContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const NameInput = styled.input.attrs((props) => ({
  type: "text",
  size: "1rem",
}))`
  width: 48%;
  font-size: 1em;
  border: none;
  border-radius: 3px;
  padding: 20px;
  outline: none;
  color: #0c072c;
`;

const EmailContainer = styled.div`
  width: 100%;
  height: 40px;
  background: green;
  margin-bottom: 12px;
`;

const EmailInput = styled.input.attrs((props) => ({
  type: "text",
  size: "1rem",
}))`
  height: 100%;
  width: 100%;
  font-size: 1em;
  border: none;
  border-radius: 3px;
  padding: 20px;
  outline: none;
  color: #0c072c;
`;

const MessageContainer = styled.div`
  width: 100%;
  height: 200px;
  background: red;
  margin-bottom: 12px;
`;

const MessageInput = styled.input.attrs((props) => ({
  type: "text",
  size: "1rem",
}))`
  height: 100%;
  width: 100%;
  font-size: 1em;
  border: none;
  border-radius: 3px;
  padding: 20px;
  outline: none;
  color: #0c072c;
  display: flex;
  justify-content: flex-start;
`;

const SubmitButton = styled.button`
  width: 48%;
  height: 40px;
  align-self: flex-start;
  border-radius: 3px;
  outline: none;
  border: none;
  color: #0c072c;
  background: white;
`;

export default ContactUsForm;
