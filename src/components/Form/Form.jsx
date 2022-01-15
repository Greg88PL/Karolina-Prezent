import React from "react";
import { useWeatherContext } from "../../context/WeatherContextProvider";

export const Form = () => {
  const { searchCity } = useWeatherContext();

  const handleCitySearch = (event) => {
    event.preventDefault();
    searchCity(event.target[0].value);
    event.target.reset();
  };

  return (
    <form className="" onSubmit={handleCitySearch}>
      <input type="text" />
      <button>Search</button>
    </form>
  );
};
