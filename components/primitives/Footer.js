import styled from "styled-components";

function Footer() {
  return (
    <FooterStyled>
      <FooterContainer>
        <LogoContainer>
          <img src="/images/logo.png" />
        </LogoContainer>
        <ContactUsButton>Contact Us</ContactUsButton>
        <CopyRight>&copy;JM DESIGN &#38; JOINERY 2021</CopyRight>
      </FooterContainer>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0c072c;
`;

const FooterContainer = styled.div`
  width: 30%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const LogoContainer = styled.div`
  width: 50px;
  height: 50px;
  margin-bottom: 5px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ContactUsButton = styled.button`
  outline: none;
  background: none;
  border: none;
  border-bottom: 1px solid white;
  color: white;
  font-weight: 400;
`;

const CopyRight = styled.p`
  color: white;
  font-size: 12px;
`;

export default Footer;
