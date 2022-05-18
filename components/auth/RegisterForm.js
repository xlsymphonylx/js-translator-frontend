import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function RegisterForm({ setModeForm, register }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre"
          onChange={(event) => setName(event.target.value)}
        />
      </Form.Group>
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
        Ya tienes cuenta?
        <Button
          variant="text"
          className="text-primary"
          onClick={() => setModeForm(true)}
        >
          Inicia Sesión
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="success"
          onClick={() => register({ email, password, name })}
        >
          Registrarse
        </Button>
      </div>
    </Form>
  );
}

export default RegisterForm;
