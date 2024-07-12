import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { WeatherDailyIcons } from "../../Icons/WeatherIcons";

export function WeatherDailyForecastTable(props) {
  if (props.tableData === "") {
    return;
  }

  const formatedTableData = formatDataArray(props.tableData);

  function getWeekday(inputDate = String) {
    const daysOfWeek = ["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"];
    const date = new Date(inputDate);
    return daysOfWeek[date.getDay()];
  }

  function formatDateDayMonth(inputDate = String) {
    const date = new Date(inputDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // getMonth() retorna o mês de 0 a 11
    return `${day}/${month}`;
  }

  function formatDataArray(tableData = Array) {
    let formatedData = [];
    let index = 0;

    while (tableData.time.length > index) {
      formatedData.push([
        tableData.time[index],
        tableData.temperature_2m_max[index],
        tableData.temperature_2m_min[index],
        tableData.precipitation_sum[index],
        tableData.rain_sum[index],
      ]);

      index++;
    }

    return formatedData;
  }

  function DailyWeather(
    time,
    temperature_2m_max,
    temperature_2m_min,
    rain_sum
  ) {
    this.time = time;
    this.temperature_2m_max = temperature_2m_max;
    this.temperature_2m_min = temperature_2m_min;
    this.rain_sum = rain_sum;
  }

  return (
    <table className="weather-daily-forecast-table">
      <tbody>
        {formatedTableData.map((day, index) => {
          day = new DailyWeather(day[0], day[1], day[2], day[4]);

          return (
            <tr key={index} className={`__table-row ${index === 0 ? "__first-row" : ""}`}>
              <td>
                <div align="center" className="__weekday-date">
                  <h5>
                    <strong>
                      {index == 0 ? "HOJE" : getWeekday(day.time)}
                    </strong>
                  </h5>
                  <p className="mb-0">{formatDateDayMonth(day.time)}</p>
                </div>
              </td>
              <td>
                <div align="center" className="__temperatures d-flex gap-2">
                  <p className="__daily-icon">
                    <WeatherDailyIcons
                      weatherData={{ rain_sum: day.rain_sum }}
                    />
                  </p>
                  <p className="__daily-max">
                    {parseInt(day.temperature_2m_max) + "º"}
                  </p>
                  <p className="__daily-min">
                    {parseInt(day.temperature_2m_min) + "º"}
                  </p>
                </div>
              </td>
              <td className="__daily-description">
                <div>
                  <p className="mb-0">
                    <strong>
                      {day.rain_sum > 0 ? "Nublado" : "Ensolarado"}
                    </strong>
                  </p>
                  <p className="mb-0">
                    {day.rain_sum > 0
                      ? "Chances moderadas de chuva"
                      : "Céu limpo na maior parte do dia"}
                  </p>
                </div>
              </td>
              <td>
                <div align="center" className="d-flex gap-1 align-items-center">
                  <p className="mb-0">
                    <FontAwesomeIcon icon={faDroplet} />
                  </p>
                  <p className="mb-0">{`${day.rain_sum}%`}</p>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
