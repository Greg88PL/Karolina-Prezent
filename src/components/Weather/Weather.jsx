import React from "react";
import { useWeatherContext } from "../../context/WeatherContextProvider";

export const Weather = () => {
  const { weather } = useWeatherContext();

  const convertTime = (unixTime, offset) => {
    let dt = new Date((unixTime + offset) * 1000);
    let h = dt.getHours() - 1;
    let m = "0" + dt.getMinutes();
    let t = h + ":" + m.substr(-2);
    return t;
  };

  let sunRise = convertTime(weather.sys.sunrise, weather.timezone);
  let sunSet = convertTime(weather.sys.sunset, weather.timezone);

  const iconId = weather.weather[0].icon;

  return (
    <div className="weather-info">
      {/* <div>Miasto: {weather.name}</div>
      <div>Temperatura: {weather.main.temp.toFixed(1)} &deg;C </div>
      <div>Wilgotność: {weather.main.humidity} %</div>
      <div>Ciśnienie: {weather.main.pressure} hPa</div>
      <div> Wschód słońca: {sunRise}</div>
      <div> Zachód słońca: {sunSet}</div>
      <div>Opis: {weather.weather[0].main}</div>
      <div>Opis szczegółowy: {weather.weather[0].description}</div>
      <img
        src={`http://openweathermap.org/img/w/${iconId}.png`}
        alt={weather.weather[0].description}
      />
      <div>Lon: {weather.coord.lon}</div>
      <div>Lat: {weather.coord.lat}</div> */}

      <div>Weekend z Princeską</div>
      <br></br>
      <div>18 - 20.02.2022</div>
      <br></br>
      <div>Hotel Skansen</div>
      <div>Conference &amp; Spa</div>
      <a href="https://www.hotelskansen.pl/" target="_blank">
        www.hotelskansen.pl
      </a>
    </div>
  );
};
