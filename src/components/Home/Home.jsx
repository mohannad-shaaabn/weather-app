import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import fetchWeather from '../../constant/api';

export default function Home() {
  const [city, setCity] = useState('London');
  const [debouncedCity, setDebouncedCity] = useState('London');
  const [fallbackUsed, setFallbackUsed] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      if (city.trim() === '') {
        setDebouncedCity('London');
      } else {
        setDebouncedCity(city.trim());
      }
      setFallbackUsed(false); 
    }, 500);
    return () => clearTimeout(handler);
  }, [city]);

  const {
    data,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useQuery({
    queryKey: ['weather', debouncedCity],
    queryFn: () => fetchWeather(debouncedCity),
    enabled: !!debouncedCity,
    retry: false,
    onError: () => {
      // fallback to London if error and not already fallbacked
      if (debouncedCity !== 'London' && !fallbackUsed) {
        setDebouncedCity('London');
        setFallbackUsed(true);
      }
    },
  });

  return (
    <div className="min-h-screen bg-[#1e1e2f] text-white">
      <div
        className="bg-cover bg-center h-[250px] flex flex-col justify-center items-center"
        style={{ backgroundImage: `url('https://wallpaperaccess.com/full/128701.jpg')` }}
      >
        <input
          type="text"
          placeholder="Find your location..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-2/3 md:w-1/2 px-4 py-3 rounded-full text-black outline-none"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        {(isLoading || isFetching) && <p className="text-center">Loading...</p>}
        {error && <p className="text-center text-red-500">Error fetching data</p>}
        {data && data.forecast?.forecastday?.map((day, index) => (
          <div key={day.date} className="bg-[#2e2e3f] p-6 rounded-lg shadow-md text-center">
            <h3 className="text-lg mb-1">{new Date(day.date).toLocaleDateString('en-GB', { weekday: 'long' })}</h3>
            <p className="mb-4">{new Date(day.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}</p>

            {index === 0 && (
              <h2 className="text-4xl font-bold mb-2">{data.location.name}</h2>
            )}

            <div className="text-3xl font-bold">
              {day.day.avgtemp_c}°C
            </div>
            <div className="text-sm text-gray-400">{day.day.mintemp_c}°</div>
            <img
              src={`https:${day.day.condition.icon}`}
              alt={day.day.condition.text}
              className="mx-auto my-2"
            />
            <p className="text-cyan-400">{day.day.condition.text}</p>

            {index === 0 && (
              <div className="flex justify-center gap-4 text-sm mt-4">
                <span>💧 {day.day.daily_chance_of_rain}%</span>
                <span>🌬 {day.day.maxwind_kph} km/h</span>
                <span>🧭 {data.current.wind_dir}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
