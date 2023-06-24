// all imports
import rounding from "./helper";
import {
  searchBtn,
  input,
  weatherText,
  weatherTemp,
  currState,
  windSpeed,
  Humidity,
  feelLike,
  minTemp,
  maxTemp,
  Country,
  weatherIcon,
} from "./domelements";
// starting main function
const weatherData = () => {
  // adding event listener
  function cityToSearch() {
    searchBtn.addEventListener("click", () => {
      // Taking value
      input.value === "" ? null : receivingData(input.value);
    });
  }
  //  Fetching Data
  const receivingData = async (city) => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=aba6ff9d6de967d5eac6fd79114693cc`
    );
    const weat = await res.json();
    settingData(weat, city);
  };
  // extracting Data
  const settingData = (weat, city) => {
    const { sys, wind, main, weather } = weat;
    const { country } = sys;
    const { speed } = wind;
    const { temp, feels_like, temp_min, temp_max, humidity } = main;
    const [txt] = weather;
    const { main: desc, icon } = txt;
    changingMarkup(
      desc,
      temp,
      feels_like,
      temp_min,
      temp_max,
      humidity,
      country,
      speed,
      city
    );
    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
  };

  // Changing HTMl markup
  const changingMarkup = (
    desc,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    country,
    speed,
    city
  ) => {
    weatherText.textContent = city;
    weatherTemp.textContent = `${rounding(temp)}°C`;
    currState.textContent = desc;
    windSpeed.textContent = `Wind: ${speed}K/h`;
    Humidity.textContent = `Humid: ${humidity}`;
    feelLike.textContent = rounding(feels_like);
    minTemp.textContent = `${rounding(temp_min)}°C`;
    maxTemp.textContent = `${rounding(temp_max)}°C`;
    Country.textContent = country;
  };
  cityToSearch();
};
export default weatherData;