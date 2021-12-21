import styled from "styled-components";
import { theme } from "variables/theme";

export const PageTitleHeader = styled.h2`
  color: ${theme.light};
  position: fixed;
  top: 18px;
  z-index: 10;
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding-left: 10px;
    top: 28px;
    font-size: 14px;
  }
`;
