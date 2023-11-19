import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HeadBar from "../components/HeadBar";

const Home = () => {
  return (
    <>
      <HeadBar />
      <div className="App-Img" >
        <Link to="/kaos">
          <img className="App-Kaos" src="/kaos.jpg" />
        </Link>
        <Link to="/kemeja">
          <img className="App-Kemeja" src="/kemeja.jpg" />
        </Link>
        <Link to="/celana">
          <img style={{ marginLeft: "50px" }} className="App-Celana" src="/celana.jpg" />
        </Link>
      </div>
    </>
  )
}

export default Home;