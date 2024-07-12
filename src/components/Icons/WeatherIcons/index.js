import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudMoon,
  faCloudShowersHeavy,
  faCloudSun,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export function WeaterIcons(props) {
  if (typeof props.weatherData !== "object") {
    return;
  }

  const weatherData = props.weatherData;

  if (weatherData.is_day) {
    if (parseInt(weatherData.rain) > 0) {
      return (
        <FontAwesomeIcon icon={faCloudShowersHeavy} className="preview-icon" />
      );
    }

    if (weatherData.cloud_cover < 50) {
      return <FontAwesomeIcon icon={faSun} className="preview-icon" />;
    }

    if (weatherData.cloud_cover >= 50) {
      return <FontAwesomeIcon icon={faCloudSun} className="preview-icon" />;
    }
  } else {
    if (parseInt(weatherData.rain) > 0) {
      return (
        <FontAwesomeIcon icon={faCloudShowersHeavy} className="preview-icon" />
      );
    }

    if (weatherData.cloud_cover < 50) {
      return <FontAwesomeIcon icon={faMoon} className="preview-icon" />;
    }

    if (weatherData.cloud_cover >= 50) {
      return <FontAwesomeIcon icon={faCloudMoon} className="preview-icon" />;
    }
  }
}

export function WeatherDailyIcons(props) {
  if (typeof props.weatherData !== "object") {
    return;
  }

  const weatherData = props.weatherData;

  if (weatherData.rain_sum > 0) {
    return (
      <FontAwesomeIcon icon={faCloudShowersHeavy} />
    );
  }

  return <FontAwesomeIcon icon={faSun} />;
}

export function WeatherHourlyIcons(props) {
  if (typeof props.weatherData !== "object") {
    return;
  }

  const weatherData = props.weatherData;

  if (weatherData.rain > 0) {
    return (
      <FontAwesomeIcon icon={faCloudShowersHeavy} />
    );
  }

  if(weatherData.hour < 6 || weatherData.hour > 17) {
    return <FontAwesomeIcon icon={faMoon} />;
  }

  return <FontAwesomeIcon icon={faSun} />;
}
