import { NavLink } from 'react-router-dom';
import { Dropdown, NavDropdown, Navbar, Nav, Container } from 'react-bootstrap';

function NewNav() {
  return (

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
              <NavDropdown.Item href="/history">
                Service History
              </NavDropdown.Item>
              <NavDropdown.Item href="/technicians">Technicians</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  //   <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  //     <div className="container-fluid">
  //       <NavLink className="navbar-brand" to="/">CarCar</NavLink>
  //       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //         <span className="navbar-toggler-icon"></span>
  //       </button>
  //       <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  //           <li className="nav-item">
  //               <NavLink className="nav-link" to="/manufacturers">Manufacturers</NavLink>
  //           </li>
  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/automobiles">Automobiles</NavLink>
  //           </li>
  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/services">List of Appointments</NavLink>
  //           </li>
  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/services/new">Enter a Service Appointment</NavLink>
  //           </li>
  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/history">Service History</NavLink>
  //           </li>
  //           <li className="nav-item">
  //             <NavLink className="nav-link" to="/technicians">Enter a Technician</NavLink>
  //           </li>
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // )


export default NewNav;
