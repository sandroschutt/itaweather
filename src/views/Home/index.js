import "./style.scss";
import { Layout } from "../../template/Layout";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import itaWeatherLogo from "../../assets/image/itaweather-logo.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function HomeView() {
  const [cityName, setCityName] = useState("");
  const navigate = useNavigate();

  function handleSubmit() {
    navigate(`/city/${cityName}`);
  }

  return (
    <Layout>
      <h1 className="title" style={{ display: "none" }}>
        ItaWeather
      </h1>
      <p align="center">
        <img
          src={itaWeatherLogo}
          alt="Logo - ItaWeather"
          title="ItaWeather logo"
          loading="eager"
          width="340"
          height="144"
        />
      </p>
      <Form id="form-city-search-homepage" onSubmit={() => handleSubmit()}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>
            Confira o clima nas cidades do Vale do Ribeira:
          </Form.Label>
          <div className="form-input-group">
            <Form.Control
              type="text"
              placeholder="Encontre sua cidade"
              onChange={(event) => setCityName(event.target.value)}
            />
            <Button variant="primary" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </div>
        </Form.Group>
      </Form>
    </Layout>
  );
}
