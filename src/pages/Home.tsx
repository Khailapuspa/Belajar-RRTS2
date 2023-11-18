import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () =>{
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Product" id="basic-nav-dropdown">
              <NavDropdown.Item href="/kaos">Baju</NavDropdown.Item>
              <NavDropdown.Item href="/kemeja">Kemeja</NavDropdown.Item>
              <NavDropdown.Item href="/celana">Celana</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/data">Data Penjualan</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            <div className="App-Img" >
                <Link to="/kaos">
                    <img className="App-Kaos" src="/kaos.jpg" />
                </Link>
                    <Link to="/kemeja">
                    <img className="App-Kemeja" src="/kemeja.jpg" />
                    </Link>
                <Link to="/celana">
                    <img style={{marginLeft: "50px"}} className="App-Celana" src="/celana.jpg" />
                </Link>
            </div>
        </>
    )
}

export default Home;