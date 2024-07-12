import "./style.scss";
import Card from "react-bootstrap/Card";
import { WeatherCurrentTable } from "../../Tables/WeatherCurrentTable";
import { WeaterIcons } from "../../Icons/WeatherIcons";

export function WeatherCurrentCard(props) {
  if (props.cardData !== "") {
    return (
      <Card className="climate-conditions-card">
        <Card.Header className="climate-conditions-card--header">
          <h4>Condições meteorológicas atuais</h4>
        </Card.Header>
        <Card.Body className="__body">
          <div className="__preview">
            <WeaterIcons weatherData={props.cardData} />
            <div>
              <p className="__temperature text-right">{`${parseInt(
                props.cardData.temperature_2m
              )}º`}</p>
            </div>
          </div>
          <div>
            <WeatherCurrentTable tableData={props.cardData} />
          </div>
        </Card.Body>
      </Card>
    );
  }
}
