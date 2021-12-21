import styled from "styled-components";
import { theme } from "variables/theme";

export const FooterContainer = styled.footer`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.dark};

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const FooterWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  align-items: center;
  grid-gap: 26px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const FooterCard = styled.div`
  background: ${theme.light};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: sclar(1.02);
    transition: all 0.2s ease-in-out;
  }
`;

export const FooterIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const FooterH1 = styled.h1`
  font-size: 2.5rem;
  color: ${theme.light};
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const FooterH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  color: ${theme.light_red};
`;

export const FooterEmail = styled.a`
  font-size: 1rem;
  text-align: center;
  color: ${theme.dark};
  cursor: pointer;
  text-decoration: none;
`;

export const FooterP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${theme.dark};
`;

export const FooterCopyRight = styled.p`
  font-size: 1rem;
  text-align: center;
  color: ${theme.light};
  padding: 48px 0 12px 0;
`;
