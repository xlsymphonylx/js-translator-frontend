import { useRouter } from "next/router";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import authService from "../../services/authService";
import { swalError, swalSuccess } from "../../utils/alertUtils";

function NavbarMain() {
  const router = useRouter();

  const logout = async () => {
    try {
      await authService.logout();
      await swalSuccess("Se ha cerrado la sesión con exito");
      router.push("/auth");
    } catch (error) {
      console.log(error);
      await swalError(error);
    }
  };
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="me-auto">
          Codex
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/translation">Traducción</Nav.Link>
            <Nav.Link href="#examples">Ejemplos</Nav.Link>
            <Nav.Link className="text-danger" onClick={() => logout()}>
              Cerrar Sesión
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
