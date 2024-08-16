import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import CurrentWeather from "../components/currentWeather";
import TimeAndLocation from "../components/timeAndLocation";
import HourlyForecast from "../components/hourlyForecast";
import ExtendedForecast from "../components/extendedForecast";
import { getCoordinates } from "../utils/getCooardinates";
import Sunny from "../assets/images/sunny.jpg";
import Cloudy from "../assets/images/cloudy.jpg";
import Rainy from "../assets/images/rainy.jpg";
import Snowy from "../assets/images/snowy.jpg";
import Thunder from "../assets/images/thunder.jpg";

const getBackgroundImage = (weatherCondition) => {
  switch (weatherCondition) {
    case "Rain":
      return Rainy;
    case "Clouds":
      return Cloudy;
    case "Clear":
    default:
      return Sunny;
    case "Snow":
      return Snowy;
    case "Thunderstorm":
      return Thunder;
  }
};
const Home = () => {
  const [data, setData] = useState(null);
  const [cityName, setCityName] = useState("Kathmandu");

  useEffect(() => {
    fetchData("Kathmandu");
  }, []);

  const fetchData = async (newCityName) => {
    setCityName(newCityName);
    const { lon, lat, apiKey } = await getCoordinates(newCityName);
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    setData(data);
  };
  console.log("data", data);
  const weatherCondition = data?.current?.weather[0]?.main || "Clear"; // Default to 'Clear'
  const backgroundImage = getBackgroundImage(weatherCondition);

  return (
    <div>
      <div
        className=" min-h-screen flex mx-auto justify-center flex-col 
        bg-gradient-to-br shadow-xl shadow-blue-300
        max-w-screen px-32 py-5 rounded-lg from-blue-100 to-blue-500
       "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div>
          <Navbar cityNameChange={fetchData} />
        </div>
        <div>
          <TimeAndLocation />
        </div>
        <div>
          <CurrentWeather weatherData={data} cityName={cityName} />
        </div>
        <div>
          <HourlyForecast />
        </div>
        <div>
          <ExtendedForecast />
        </div>
      </div>
    </div>
  );
};

export default Home;
