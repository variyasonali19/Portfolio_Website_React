import React from "react";
import { Card, CardColumns } from "react-bootstrap";
import { FaBook } from "react-icons/fa";
import "./Education.scss";
import {
  InfoContainer,
  InfoWrapper,
  InfoTitle,
  InfoText,
  MainTitle,
  TitleIcon,
  TitleWrapper,
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
