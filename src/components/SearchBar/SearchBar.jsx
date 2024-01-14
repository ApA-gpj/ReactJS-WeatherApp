/* eslint-disable react/prop-types */
import { useState } from 'react';

const SearchBar = ({ updateSearchData }) => {

  const [searchValue, setSearchValue] = useState('');
  // const searchedData = `http://api.weatherstack.com/current?access_key=bee261edd16ebb9dbe08656ee3d602cc&query=${searchValue.toLowerCase()}`;
  const searchedData = `https://https://api.openweathermap.org/data/2.5/weather?q=${searchValue.toLowerCase()}&appid=da936290743d81ba60a6d9b180bea3f9}`;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(searchedData)
      const data = await response.json()
      updateSearchData(data)
      setSearchValue('')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <div >
      <form onSubmit={submitHandler} className='search-container'>
        <label className='search-label' htmlFor="searchinput">Enter City Name : </label>
        <input className='search-input' type="search" name="searchinput" id="searchinput" autoFocus onChange={event => setSearchValue(event.target.value)} value={searchValue} />
        <button className='search-btn' type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
