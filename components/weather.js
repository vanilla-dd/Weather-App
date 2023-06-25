import toast from "./toast";
import rounding from "./helper";
import aqi from "./aqi";
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
      input.value === ""
        ? toast()
        : receivingData(input.value.toLowerCase().trim());
    });
  }
  //  Fetching Data
  const receivingData = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=aba6ff9d6de967d5eac6fd79114693cc`
      );
      const weat = await res.json();
      settingData(weat, city);
    } catch (e) {
      toast();
      throw new Error("cannot find the location");
      console.log(e);
    }
  };
  // extracting Data
  const settingData = (weat, city) => {
    const { sys, wind, main, weather, coord } = weat;
    console.log(coord);
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
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1920x1080/?${city})`;
    aqi(coord);
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
    feelLike.textContent = `${rounding(feels_like)}°C`;
    minTemp.textContent = `${rounding(temp_min)}°C`;
    maxTemp.textContent = `${rounding(temp_max)}°C`;
    Country.textContent = country;
  };

  cityToSearch();
};

export default weatherData;
