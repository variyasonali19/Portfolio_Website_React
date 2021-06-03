import React from "react";
import "./Education.scss";
import {
  InfoText, InfoTitle
} from "./EducationElements";
export default function InfoSection({ title, para1, para2 }) {
  return (
    <>
      <InfoTitle>{title}</InfoTitle>
      <InfoText>
        {para1}
        <br />
        {para2}
      </InfoText>
    </>
  );
}
