export async function getCoordinates(cityName) {
  const apiKey = "cbf9c7c5b879d4a3f23cb72804a94ad2";
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch coordinates");
  }

  const data = await response.json();
  const { lon, lat } = data.coord;
  return { lon, lat, apiKey };
}
