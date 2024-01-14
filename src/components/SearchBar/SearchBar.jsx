/* eslint-disable react/prop-types */
import { useState } from "react";

const SearchBar = ({ updateSearchData }) => {
  const [searchValue, setSearchValue] = useState("");
  const apiKey = "da936290743d81ba60a6d9b180bea3f9";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue.toLowerCase()}&appid=${apiKey}&units=metric`;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      updateSearchData(data);
      setSearchValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitHandler} className="search-container">
        <label className="search-label" htmlFor="searchinput">
          Enter City Name :{" "}
        </label>
        <input
          className="search-input"
          type="search"
          name="searchinput"
          id="searchinput"
          autoFocus
          onChange={(event) => setSearchValue(event.target.value)}
          value={searchValue}
        />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
