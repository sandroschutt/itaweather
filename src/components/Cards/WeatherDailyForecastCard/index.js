import "./style.scss";
import Card from "react-bootstrap/Card";
import { WeatherDailyForecastTable } from "../../Tables/WeatherDailyForecastTable";

export function WeatherDailyForecastCard(props) {
  if (props.cardData !== "") {
    const dailyWeatherData = props.cardData;
    
    return (
      <Card className="weather-daily-forecast-card">
        <Card.Header className="weather-daily-forecast-card--header">
          <h4>{"Previsão diária"}</h4>
        </Card.Header>
        <Card.Body className="weather-daily-forecast-card--body">
          <WeatherDailyForecastTable tableData={dailyWeatherData}/>
        </Card.Body>
      </Card>
    );
  }
}
