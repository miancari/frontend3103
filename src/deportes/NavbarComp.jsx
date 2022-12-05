import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link,Outlet} from 'react-router-dom'
import Principal from './presentacion';

export const NavBarComp = () => {

return (
<>
<Navbar collapseOnSelect expand="lg"  bg="light"  variant="light">
      <Container>
        <Navbar.Brand href="#home">Eventos Deportivos</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to ={"/mevento"} >Eventos</Nav.Link>
            <Nav.Link as ={Link} to ={"/regevento"}>Registrar Evento</Nav.Link>
            <NavDropdown title="Usuarios" id="collasible-nav-dropdown">
              <NavDropdown.Item as ={Link} to ={"/editarevento"}>Login Up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contactenos
              </NavDropdown.Item>
              <NavDropdown.Item as ={Link} to ={"/musuario"}>Mostrar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as ={Link} to ={"/login"}>
                Login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
          <Outlet>

          </Outlet>
   </section>
</>

)


}

export default NavBarComp