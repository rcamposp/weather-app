import React, { ReactNode, useState } from 'react';

const WeatherCard: React.FC<any> = ({
  weather,
  unit,
  onFavorite,
}) => {
  const temperature: number = unit === "C" ? weather.temperature : (weather.temperature * 9/5) + 32;

  const handleFavoriteClick = () => {
    onFavorite();
  };

  return (
    <tr className="weather-card" data-testid={`weather-card-${weather.id}`}>
      <td>{weather.city}</td>
      <td>{unit === "C" ? `${temperature} °` : `${temperature} F`}</td>
      <td>{weather.description}</td>
      <td>
        {
          <button onClick={handleFavoriteClick} data-testid={`weather-card-action-${weather.id}`} className={weather.isFavorite ? 'danger' : ''}>
            { weather.isFavorite ? "Remove from favorites" : "Add to Favorites" }
          </button>
        }
      </td>
    </tr>
  );
};

export default WeatherCard;

