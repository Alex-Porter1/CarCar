import { NavLink } from 'react-router-dom';
import { Dropdown, NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';
import "./index.css";


function NewNav() {
  return (
    <>
    <Navbar variant="dark" bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">CarCar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Inventory"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/manufacturers">Manufacturers</NavDropdown.Item>
              <NavDropdown.Item href="/manufacturers/new">Add New Manufacturer</NavDropdown.Item>
              <NavDropdown.Item href="/models">Vehicle Models</NavDropdown.Item>
              <NavDropdown.Item href="/models/new">Create Models</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles">Automobile Inventory</NavDropdown.Item>
              <NavDropdown.Item href="/automobiles/new">Add New Automobile</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Services"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/services">Service Appointments</NavDropdown.Item>
              <NavDropdown.Item href="/services/new">Schedule Service Appointment</NavDropdown.Item>
              <NavDropdown.Item href="/history">Service History</NavDropdown.Item>
              <NavDropdown.Item href="/technicians">Technicians</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Sales"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/salesperson">Add Sales Person</NavDropdown.Item>
              <NavDropdown.Item href="/customer">Add Customer</NavDropdown.Item>
              <NavDropdown.Item href="/record">Create a sale record</NavDropdown.Item>
              <NavDropdown.Item href="/saleslist">List all sales</NavDropdown.Item>
              <NavDropdown.Item href="/saleshistory">Sales person history</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Login"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/sign-in">Login</NavDropdown.Item>
              <NavDropdown.Item href="/sign-up">Sign up</NavDropdown.Item>
            </NavDropdown>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
    </>
  );
}


export default NewNav;



{/* <NavLink className="nav-link" to={'/sign-in'}>Login</NavLink>
<NavLink className="nav-link" to={'/sign-up'}>Sign up</NavLink> */}