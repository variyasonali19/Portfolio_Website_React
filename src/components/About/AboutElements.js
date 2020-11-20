import styled from "styled-components";
export const AboutContainer = styled.div`
  background-color: white;
  overflow: hidden;
  overflow-x: hidden;
`;
export const AboutBodyWrapper = styled.div`
  display: flex;
`;

export const AboutTextWrapper = styled.div`
  padding: 20px 150px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 820px) {
    padding: 50px;
  }
`;

export const AboutText = styled.h1`
  font-size: 18px;
  margin: 10px;
  font-weight: 500;
`;
