import React, { useRef, useEffect, useState } from "react";
import { useWeatherContext } from "../../context/WeatherContextProvider";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiZ3JlZzg4cGwiLCJhIjoiY2t5NmEzY2l4MHR3MzJwb2pyZTFmdjFwcSJ9.TfLfzZj270_0ZbXFeoMpLA";

export const Map = () => {
  const { weather } = useWeatherContext();
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(11);

  //   const [lng, setLng] = useState(21.01);
  //   const [lat, setLat] = useState(52.23);
  //   const [zoom, setZoom] = useState(11);

  // const cityCoordinates = [
  //   [100.507, 13.745],
  //   [98.993, 18.793],
  //   [99.838, 19.924],
  //   [102.812, 17.408],
  //   [100.458, 7.001],
  //   [100.905, 12.935],
  // ];

  useEffect(() => {
    // if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/satellite-streets-v11",
      center: [weather.coord.lon, weather.coord.lat],
      zoom: 11,
    });

    console.log(map);
  }, [weather.coord.lat, weather.coord.lon]);

  // useEffect(() => {
  //   if (!map.current) return;
  //   map.current.on("load", () => {
  //     for (const [index, coordinate] of cityCoordinates.entries()) {
  //       setTimeout(() => {
  //         map.current.jumpTo({ center: coordinate });
  //       }, 2000 * index);
  //     }
  //   });
  // });

  // useEffect(() => {
  //   if (!map.current) return;
  //   map.current.flyTo({ center: [-3.88, 36.75], zoom: 14 });
  // });

  const [showElement, setShowElement] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setShowElement(false);
    }, 15000);
  }, []);

  return (
    <div className="center">
      {showElement ? (
        <button
          className="btn"
          onClick={() =>
            map.current.flyTo({
              center: [19.631, 52.865],
              zoom: 17,
              speed: 0.2,
              curve: 0.7,
              // essential: true,
            })
          }
        >
          Zobacz gdzie jedziemy
        </button>
      ) : (
        <></>
      )}

      {/* <div className="sidebar">
        Longitude: {weather.coord.lon} | Latitude: {weather.coord.lat} | Zoom:{" "}
        {zoom}
      </div> */}
      <div
        ref={mapContainer}
        className="map-container" /*css={mapContainer}*/
      />
    </div>
  );
};

// const mapContainer = css`
//   height: 100vh;
// `;
