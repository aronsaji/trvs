import React from "react";
import mobile_red from "images/mobile_red.svg";
import map_red from "images/map_red.svg";
import mail_red from "images/mail_red.svg";
import {
  FooterContainer,
  FooterWrapper,
  FooterCard,
  FooterIcon,
  FooterH1,
  FooterH2,
  FooterEmail,
  FooterP,
  FooterCopyRight,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterH1>Kontakt</FooterH1>
      <FooterWrapper>
        <FooterCard>
          <FooterIcon src={map_red} />
          <FooterH2>Adresse</FooterH2>
          <FooterP>Nedre Rommen 3, 0988 Oslo</FooterP>
        </FooterCard>
        <FooterCard>
          <FooterIcon src={mail_red} />
          <FooterH2>Epost</FooterH2>
          <FooterEmail href="mailto:trvs@trvs.no">trvs@trvs.no</FooterEmail>
        </FooterCard>
        <FooterCard>
          <FooterIcon src={mobile_red} />
          <FooterH2>Telefon</FooterH2>
          <FooterP>22218191</FooterP>
        </FooterCard>
      </FooterWrapper>
      <FooterCopyRight>
        Copyright © Tamilsk Ressurs -og Veiledningssenter 2021
      </FooterCopyRight>
    </FooterContainer>
  );
};

export default Footer;
