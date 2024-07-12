import "./style.scss";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import itaWeatherNavLogo from "../../../assets/image/itaweather-logo-96x41.png";

function MainMenu() {
  return (
    <Navbar id="main-menu">
        <Navbar.Brand href="/" className="__navigation-logo">
          <img
            src={itaWeatherNavLogo}
            alt="ItaWeather app logo"
          />
        </Navbar.Brand>
        <Nav>
            <Nav.Link href="/clients">Clientes</Nav.Link>
            <Nav.Link href="/companies">Empresas</Nav.Link>
        </Nav>
    </Navbar>
  );
}

export default MainMenu;
