import React from "react";
import { FiWind } from "react-icons/fi";
import { CgThermostat } from "react-icons/cg";
import { MdFilterDrama } from "react-icons/md";
import Humidity from "/assets/humidity.svg";

const ExtendedForecast = ({ dayData }) => {
  if (!dayData) {
    return <p></p>;
  }
  const dayName = new Date(dayData.dt * 1000).toLocaleDateString("en-US", {
    weekday: "long",
  });
  const temperature = dayData.temp.day;
  const weatherDescription = dayData.weather[0].description;
  const windSpeed = dayData.wind_speed;

  const humidity = dayData.humidity;
  const cloudiness = dayData.clouds;
  const iconCode = dayData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  return (
    <div className="flex justify-between gap-12 bg-black bg-opacity-50 rounded-lg shadow-lg shadow-black">
      <div className="flex flex-col gap-2 px-8 py-4">
        <h1 className="font-bold">{dayName}</h1>
        <div className="flex gap-1 items-center">
          <img src={iconUrl} className="w-10" alt="Weather Icon" />
          <p>{weatherDescription}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-5 py-4 items-center justify-center">
        <div className="flex gap-2">
          <CgThermostat size={20} />
          <h1 className="font-bold">{temperature} °C</h1>
        </div>
        <div className="flex gap-2">
          <MdFilterDrama size={20} />
          <h1 className="font-bold">{cloudiness}%</h1>
        </div>
      </div>
      <div className="flex flex-col gap-2 px-5 py-4 items-center justify-center">
        <div className="flex gap-2">
          <img src={Humidity} className="w-6" alt="Humidity Icon" />
          <h1 className="font-bold">{humidity}%</h1>
        </div>
        <div className="flex gap-2">
          <FiWind size={20} />
          <h1 className="font-bold">{windSpeed} m/s</h1>
        </div>
      </div>
    </div>
  );
};

export default ExtendedForecast;
