import React from "react";
import Card from "react-bootstrap/Card";
import "./CardButton.scss";
export default function CardButton({ children }) {
  return (
    <Card style={{ width: "8rem", height: "8rem", backgroundColor: "green" }}>
      <Card.Body>
        <Card.Text className="textCardButton">
          <h4>{children}</h4>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
