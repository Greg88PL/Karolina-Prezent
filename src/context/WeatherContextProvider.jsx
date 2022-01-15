import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherContextProvider = ({ children }) => {
  const [data, setData] = useState();
  const [city, setCity] = useState("warsaw");

  const getWeather = async () => {
    const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
    const API_KEY = "&appid=" + process.env.REACT_APP_API_KEY;
    const API_UNITS = "&units=metric";
    const URL = API_LINK + city + API_KEY + API_UNITS;
    const res = await axios.get(URL);
    setData(res.data);
  };
  useEffect(() => {
    getWeather();
  }, [city]);

  const value = {
    weather: data,
    searchCity: setCity,
  };

  return (
    <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>
  );
};
