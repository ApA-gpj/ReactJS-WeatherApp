/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const ResultCard = ({ searchData }) => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    if (searchData) {
      setIsDataLoaded(true);
    } else {
      setIsDataLoaded(false);
    }
  }, [searchData]);

  return (
    <div className="result-card">
      {!isDataLoaded ? (
        <div className="loader">Your Search Results Will Shown Here ...</div>
      ) : (
        <>
          {/* city infos */}
          <div className="city-info">
            <h2 className="city-name">
              City Name: <span className="city-info">{searchData.location.name}</span>
            </h2>
            <p className="geography-info">
              Country: <span className="country-info">{searchData.location.country}</span>
            </p>
            <p className="geography-info">
              Region: <span className="region-info">{searchData.location.region}</span>
            </p>
            <p className="geography-info">
              Local Time: <span className="time-info">{searchData.location.localtime}</span>
            </p>
          </div>
          {/* weather infos */}
          <div className="weather-info">
            <h2 className="temperature">Temperature: {searchData.current.temperature}°C</h2>
            <p className="weather-info">
              Feels Like: {searchData.current.feelslike}°C<span className="feels-info"></span>
            </p>
            <p className="weather-info">
              Humidity: {searchData.current.humidity}%<span className="humidity-info"></span>
            </p>
            <p className="weather-info">
              UV-Index: {searchData.current.uv_index}<span className="uv-info"></span>
            </p>
            <p className="weather-info">
              Wind Speed: {searchData.current.wind_speed} km/ph<span className="wind-info"></span>
            </p>
          </div>
        </>

      )}
    </div>

  );
};

export default ResultCard;
