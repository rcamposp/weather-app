import React, { useState } from 'react';
import { Weather, weatherData } from '../../data/weatherData';
import WeatherCard from '../WeatherCard';
import "./index.css";

const WeatherList: React.FC = () => {  

  const [cityList, setCityList] = useState<Weather[]>(weatherData)
  const [searchText, setSearchText] = useState("")
  const [unit, setUnit] = useState("C");

  const handleFavorite = (id: Number) => {
    const updatedCityList: Weather[] | undefined = cityList.map((city: Weather) => {
      if(city.id === id){
        console.log(city);
        city.isFavorite = !city.isFavorite;
      }
      return city;
    });
    setCityList(updatedCityList);
  };

  const handleSearch = (event: any) =>{
    const searchTerm = event.target.value;
    setSearchText(searchTerm)
    
    let matchingCityList = [...weatherData];
    if(searchTerm.length > 0){
      matchingCityList = matchingCityList.filter((city: Weather) => city.city.toLowerCase().includes(searchTerm.toLowerCase()))
    }
    setCityList(matchingCityList)
  }

  const handleClearSearchClick = () =>{
    const searchTerm = "";
    setSearchText(searchTerm)
    let matchingCityList = [...weatherData];
    setCityList(matchingCityList)
  }

  const handleSwitchUnitClick = () => {
    const newUnit = unit === "C" ?  "F" : "C";
    setUnit(newUnit);
  }

  return (
    <div className="layout-column align-items-center justify-content-start weather-list" data-testid="weather-list">
      <h3>Dashboard</h3>
      <p className="city-details">Search for Current Temperature in cities like: New York, London, Paris etc.</p>
      <div className="card w-300 pt-20 pb-5 mt-5">
        <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
          <input
            type="text"
            placeholder="Search city"
            onChange={handleSearch}
            data-testid="search-input"
            value={searchText}
          />
          <button onClick={handleClearSearchClick} data-testid="clear-search-button">
            Clear search
          </button>
        </section>
        <table className="table search-results">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
             {
              cityList.map((element) => {
                return <WeatherCard
                  key={element.id}
                  weather={element}
                  unit={unit}
                  onFavorite={() => handleFavorite(element.id)}
                />
              })
             }
          </tbody>
        </table>
        <section className="layout-row align-items-center justify-content-center mt-20 mr-20 ml-20">
          <button onClick={handleSwitchUnitClick} data-testid="unit-change-button" className="outlined">
            Switch to { unit === 'C' ? 'Celsius': 'Fahrenheit'}
          </button>
        </section>
      </div>
      <h3>Favourite Cities</h3>
      <div className="card w-300 pt-20 pb-5">
        <table className="table favorites">
          <thead>
            <tr>
              <th>City</th>
              <th>Temperature</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {
              cityList
              .filter((element) => element.isFavorite)
              .map((element) => {
                return <WeatherCard
                  key={element.id}
                  weather={element}
                  unit={unit}
                  onFavorite={() => handleFavorite(element.id)}
                />
              })
             }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WeatherList;
