import styled from "styled-components";
import { theme } from "variables/theme";
import trvs_logo from "images/trvs_logo.png";

export const HeroContainer = styled.div`
  background: ${theme.light_yellow};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroImg = styled.img.attrs({
  src: `${trvs_logo}`,
})`
  width: 750px;
  height: 100px;
  margin: 0 auto;
  padding-left: 18px;

  @media screen and(max-width: 768px) {
    width: 375px;
    height: 50px;
    margin: 0 auto;
    padding-left: 18px;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    height: 40px;
    margin: 0 auto;
    padding-left: 18px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: ${theme.dark};
  font-size: 24px;
  text-align: center;
  line-height: 2rem;
  max-width: 700px;

  @media screen and(max-width: 768px) {
    font-size: 24px;
    max-width: 500px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    max-width: 500px;
  }
`;
