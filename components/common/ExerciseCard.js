import React from "react";
import { Card } from "react-bootstrap";

function ExerciseCard({ exerciseType, title, description, onClick }) {
  return (
    <Card onClick={onClick ? () => onClick() : null}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {exerciseType === 1 ? "PseudoCodigo a JS" : "JS a PseudoCodigo"}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExerciseCard;
