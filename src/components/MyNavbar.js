import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export const MyNavbar = () => {
  return (
    <div>
      <Navbar bg="asdf" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Budesliga Vorhersagesystem</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Budesliga Vorhersagesystem
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link
                  href="https://github.com/DaveDerSpatz/Softwarepraktikum-Bundesligavorhersage-"
                  target="_blank"
                >
                  Source Code
                </Nav.Link>
                <Nav.Link href="#">Search History</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
