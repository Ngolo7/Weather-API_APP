import React from "react";

const HourlyForecast = ({ hourData }) => {
  if (!hourData) {
    return <p></p>;
  }
  const temperature = hourData.temp;
  const iconCode = hourData.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  const time = new Date(hourData.dt * 1000).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex flex-col w-32 h-44  bg-black bg-opacity-50 rounded-lg shadow-lg shadow-black ">
      <div className="text-center mt-5">
        <p>{time}</p>
      </div>
      <div className="flex justify-center">
        <img src={iconUrl} alt="Weather Icon" className="w-20" />
      </div>
      <div className="flex justify-center">
        <h2 className="font-bold">{temperature} °C</h2>
      </div>
    </div>
  );
};

export default HourlyForecast;
