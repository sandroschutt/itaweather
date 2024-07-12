import "./style.scss";
import { WeatherHourlyIcons } from "../../Icons/WeatherIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

export function WeatherHourlyForecastTable(props) {
  if (props.tableData === "") {
    return;
  }

  const formatedTableData = formatTableDateArray(props.tableData);

  function formatTableDateArray(tableData = Object) {
    if (typeof tableData !== "object") {
      return;
    }

    const rain = props.tableData.rain.slice(0, 25);
    const temperature = props.tableData.temperature_2m.slice(0, 25);

    const formatTableData = [];
    let index = 0;

    while (rain.length > index) {
      let currentHourWeatherData = new WeatherHourData(
        rain[index],
        parseInt(temperature[index]),
        (index < 10 ? "0" + index : index) + ":00"
      );
      formatTableData.push(currentHourWeatherData);
      index++;
    }

    return formatTableData;
  }

  function WeatherHourData(rain = Number, temperature = Number, time = String) {
    this.rain = rain;
    this.temperature = temperature;
    this.time = time;
  }

  formatTableDateArray(props.tableData);

  return (
    <table className="weather-hourly-forecast-table">
      <tbody>
        {formatedTableData.map((hourlyWeather,index) => {
          return (
            <tr key={index} style={{borderBottom: index === formatedTableData.length - 1 ? "none" : "auto"}}>
              <td className="__time">{hourlyWeather.time}</td>
              <td className="__temperature">{hourlyWeather.temperature + "ºC"}</td>
              <td className="__icon"><WeatherHourlyIcons weatherData={{rain: hourlyWeather.rain, hour: index}}/></td>
              <td className="__rain"><span style={{marginRight: "4px"}}><FontAwesomeIcon icon={faDroplet}/></span>{parseInt(hourlyWeather.rain) + "%"}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
