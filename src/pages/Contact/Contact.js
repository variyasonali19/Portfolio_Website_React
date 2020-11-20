import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import "./Contact.css";
// import { AiOutlineMail } from "react-icons/aioutlinemail";
// import { AiOutlineHome } from "react-icons/aiOutLineHome";
// import { FiPhone } from "react-icons/fiphone";

export default function Contact() {
  return (
    <Container id="contact">
      <Card className="cardMain">
        <Card.Title>Contact</Card.Title>
        <Card.Text>
          {/* <AiOutlineMail /> variya.sonali19@gmail.com */}
        </Card.Text>
        <Card.Text>{/* <FiPhone /> 0469874433 */}</Card.Text>
        <Card.Text>{/* <AiOutlineHome /> Broadview-5083, SA */}</Card.Text>

        {/* <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Name_company name"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Type your Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> */}
      </Card>
    </Container>
  );
}
