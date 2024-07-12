import "./style.scss";
import axios from "axios";
import { Layout } from "../../template/Layout";
import { WeatherCurrentCard } from "../../components/Cards/WeatherCurrentCard";
import { WeatherHourlyForecastCard } from "../../components/Cards/WeatherHourlyForecastCard";
import { useEffect, useState } from "react";
import { WeatherDailyForecastCard } from "../../components/Cards/WeatherDailyForecastCard";
import { DefaultLoader } from "../../components/Loader";

export default function City() {
  const [currentWeatherData, setCurrentWeatherData] = useState("");
  const [hourlyWeatherData, setHourlyWeatherData] = useState("");
  const [dailyWeatherData, setDailyWeatherData] = useState("");
  const openMeteoApiRoute =
    "https://api.open-meteo.com/v1/forecast?latitude=-23.5917&longitude=-48.0531&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,cloud_cover,wind_speed_10m,wind_gusts_10m&hourly=temperature_2m,rain&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,rain_sum&timezone=America%2FSao_Paulo";

  useEffect(() => {
    if (currentWeatherData === "") {
      axios
        .get(openMeteoApiRoute)
        .then((response) => {
          setCurrentWeatherData(response.data.current);
          setHourlyWeatherData(response.data.hourly);
          setDailyWeatherData(response.data.daily);
        })
        .catch((error) => console.log(error));
    }
  }, [currentWeatherData, hourlyWeatherData, dailyWeatherData]);

  function isPageDataLoaded(data) {
    if (data === "") {
      return <DefaultLoader />;
    }
  }

  return (
    <Layout>
      <h1>Cidade: Itapetininga, SP</h1>
      {isPageDataLoaded(currentWeatherData)}
      <div className="alert"></div>
      <div className="city-overview-container">
        <div className="column-one">
          <WeatherCurrentCard cardData={currentWeatherData} />
          <div className="daily-forecast">
            <WeatherDailyForecastCard cardData={dailyWeatherData} />
          </div>
        </div>
        <div className="column-two">
          <div className="hourly-forecast">
            <WeatherHourlyForecastCard cardData={hourlyWeatherData} />
          </div>
        </div>
      </div>
    </Layout>
  );
}
