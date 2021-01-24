import styled from "styled-components";

import ContactUsForm from "./ContactUsForm";

function ContactUsPage() {
  return (
    <ContactUsStyled>
      <ContactUsForm />
      <Image>
        <img src="/images/outdoorshed.jpg" />
      </Image>
    </ContactUsStyled>
  );
}

const ContactUsStyled = styled.div`
  width: 100vw;
  height: 120vh;
  background: #0c072c;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Image = styled.div`
  width: 400px;
  height: 500px;
  margin-bottom: 50px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export default ContactUsPage;
