import "./style.scss";
import Card from "react-bootstrap/Card";
import { WeatherHourlyForecastTable } from "../../Tables/WeatherHourlyForecastTable";

export function WeatherHourlyForecastCard(props) {
  if(props.cardData === "") {
    return;
  }
  
  return (
    <Card className="weather-hourly-forecast-card">
      <Card.Header className="weather-hourly-forecast-card--header">
        <h4>{"Horários"}</h4>
      </Card.Header>
      <Card.Body className="weather-hourly-forecast-card--body">
        <WeatherHourlyForecastTable tableData={props.cardData}/>
      </Card.Body>
    </Card>
  );
}
