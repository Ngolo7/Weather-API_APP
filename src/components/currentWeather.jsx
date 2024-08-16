import React from "react";
import { BiSolidDropletHalf } from "react-icons/bi";
import { FaThermometer } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { GiSunrise, GiSunset } from "react-icons/gi";
import HourlyForecast from "../components/hourlyForecast";
import ExtendedForecast from "./extendedForecast";

const CurrentWeather = ({ weatherData, cityName }) => {
  if (!weatherData) {
    return <p>Loading...</p>;
  }
  const current = weatherData.current;
  const iconCode = current.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  return (
    <>
      {" "}
      <div className="flex justify-center text-3xl color-">
        {cityName.toUpperCase()}, {weatherData.timezone}
      </div>
      <div className="flex items-center justify-center py-6 text-3xl font-bold">
        Current Weather
      </div>
      <div className="flex flew-row items-center justify-between py-3 gap-2">
        <div className="flex flex-col gap-2 justify-between items-center">
          <h1 className="text-xl font-bold">Temperature</h1>
          <p className=" font-semibold">{current.temp}°C</p>
        </div>

        <div className="flex flex-col gap-2 justify-between items-center">
          <h1 className="text-xl font-bold">Humidity</h1>
          <p className="font-semibold"> {current.humidity}%</p>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center">
          <h1 className="text-xl font-bold">Wind</h1>
          <p className="font-semibold"> {current.wind_speed}m/s</p>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center">
          <h1 className="text-xl font-bold">Feels Like</h1>
          <p className="font-semibold"> {current.feels_like}</p>
        </div>
        <div className="flex flex-col gap-2 justify-between items-center">
          <h1 className="text-xl font-bold">Cloud</h1>
          <p className="font-semibold"> {current.clouds}%</p>
        </div>
        <img src={iconUrl} alt="weather icon" className="w-20 h-20" />
      </div>
      <h1 className="font-bold text-center text-[24px]">TODAY'S FORECAST</h1>
      <div className="flex justify-center w-full px-10 py-6 ">
        <div className="flex justify-between gap-2 flex-wrap mb-3">
          {weatherData.hourly.slice(0, 6).map((hour, index) => (
            <HourlyForecast key={index} hourData={hour} />
          ))}
        </div>
      </div>
      <h1 className="font-bold text-center text-[24px]">Extended Forecast</h1>
      <div className="flex flex-col  w-full my-10 gap-5">
        {weatherData.daily.slice(1, 7).map((day, index) => (
          <ExtendedForecast key={index} dayData={day} />
        ))}
      </div>
    </>
  );
};

export default CurrentWeather;
