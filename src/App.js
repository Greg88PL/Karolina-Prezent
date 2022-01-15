import "./App.css";
import React, { useEffect, useState } from "react";
import { useWeatherContext } from "./context/WeatherContextProvider";
import { Form } from "./components/Form/Form";
import { Weather } from "./components/Weather/Weather";
import { Map } from "./components/Map/Map";

function App() {
  const { weather } = useWeatherContext();

  const [showElement, setShowElement] = useState(false);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(true);
    }, 15000);
  }, []);

  return (
    <div className="App">
      {/* <Form /> */}

      {showElement ? weather && <Weather /> : <></>}

      {/* {weather && <Weather />} */}

      {weather && <Map />}
    </div>
  );
}

export default App;
