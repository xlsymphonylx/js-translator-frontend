import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function LoginForm({ setModeForm, login }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
      <div style={{ display: "inline-block" }}>
        No tienes cuenta?
        <Button
          variant="text"
          className="text-primary"
          onClick={() => setModeForm(false)}
        >
          Registrate
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="success"
          onClick={() => login({ email, password })}
        >
          Inicia Sesión
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
