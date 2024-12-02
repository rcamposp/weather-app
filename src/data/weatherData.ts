export interface Weather{
  id: number;
  city: string;
  temperature: number;
  description: string;
  isFavorite: boolean;
}

export const weatherData: Weather[] = [
  { id: 1, city: 'New York', temperature: 18, description: 'Sunny', isFavorite: false},
  { id: 2, city: 'London', temperature: 12, description: 'Cloudy', isFavorite: false},
  { id: 3, city: 'Paris', temperature: 16, description: 'Rainy', isFavorite: false},
  { id: 4, city: 'Tokyo', temperature: 22, description: 'Clear', isFavorite: false},
  { id: 5, city: 'Sydney', temperature: 24, description: 'Sunny', isFavorite: false},
  { id: 6, city: 'Moscow', temperature: 5, description: 'Snowy', isFavorite: false},
]; 