//to use:
//  <Button to="home" primary big fontBig btnDarkText>{buttonLabel}</Button>
import { Link as LinkR } from "react-router-dom";
import styled from "styled-components";
export const Button = styled(LinkR)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  color: ${({ btnDarkText }) => (btnDarkText ? "#000" : "#fff")};
  font-weight: 650;
  &:hover {
    text-decoration: none;
    cursor: pointer;
    color: ${({ btnDarkText }) => (btnDarkText ? "#000" : "#fff")};
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
  }
`;
