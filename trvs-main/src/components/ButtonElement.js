import styled from "styled-components";
import { Link } from "react-scroll";
import { theme } from "variables/theme";

export const Button = styled(Link)`
  border-radius: 25px;
  background: ${({ primary }) =>
    primary ? theme.light_yellow : theme.light_red};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? theme.dark : theme.light)};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) =>
      primary ? theme.dark_yellow : theme.dark_red};
  }
`;
