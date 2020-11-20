import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import "./Education.css";
export default function Education() {
  return (
    <Container id="education">
      <Table hover responsive>
        <thead>
          <tr>
            <th>Education</th>
            <th>Year</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bachelor in Electronics and Communication Engineering</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Diploma in Software Testing</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Training</th>
            <th>Year</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bachelor in Electronics and Communication Engineering</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Diploma in Software Testing</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
