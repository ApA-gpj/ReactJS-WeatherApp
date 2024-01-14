// /* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const ResultCard = ({ searchData }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const index = 0;

  useEffect(() => {
    if (searchData) {
      setIsDataLoaded(true);
    } else {
      setIsDataLoaded(false);
    }
  }, [searchData]);

  if (!isDataLoaded) {
    return (
      <div className="loader">Your Search Results Will Shown Here ...</div>
    );
  }

  return (
    <div className="result-card">
      {/* city infos */}
      <div className="city-info">
        <h2 className="city-name">
          City Name: <span className="city-info">{searchData?.name}</span>
        </h2>
        <p className="geography-info">
          Country:{" "}
          <span className="country-info">{searchData?.sys?.country}</span>
        </p>
      </div>
      {/* weather infos */}
      <div className="weather-info">
        <h2 className="temperature">
          Temperature: {Math.floor(searchData?.main?.temp)}°C
        </h2>
        <p className="weather-info">
          Feels Like: {Math.floor(searchData?.main?.feels_like)}°C
          <span className="feels-info"></span>
        </p>
        <p className="weather-info">
          Humidity: {searchData?.main?.humidity}%
          <span className="humidity-info"></span>
        </p>
        <p className="weather-info">
          Wind Speed: {Math.floor(searchData?.wind?.speed)} km/ph
          <span className="wind-info"></span>
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
