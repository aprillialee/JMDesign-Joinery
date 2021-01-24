import styled from "styled-components";

import ContactUsPage from "../components/contactuspage/ContactUsPage";

function ContactUs() {
  return (
    <ContactUsPageStyled>
      <ContactUsPage>Hello</ContactUsPage>;
    </ContactUsPageStyled>
  );
}

const ContactUsPageStyled = styled.div`
  width: 100vw;
  height: 100%;
  background: #0c072c;
`;

export default ContactUs;
