import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Skill.css";
export default function Skill() {
  return (
    <Jumbotron>
      <Row>
        <Col xs={6} md={4} className="imageBox">
          <h1>Hi, I am </h1>
        </Col>
        <Col xs="auto" md={8} className="desBox">
          <h1>Hi, I am </h1>
        </Col>
      </Row>
    </Jumbotron>
  );
}
