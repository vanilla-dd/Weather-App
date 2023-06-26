import toast from "./toast";
import changingMarkup from "./domchagne";
import aqi from "./aqi";
import { searchBtn, input, weatherIcon } from "./domelements";

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
    }
  };

  // extracting Data

  const settingData = (weat, city) => {
    const { sys, wind, main, weather, coord } = weat;
    const { country } = sys;
    const { speed } = wind;
    const { temp, feels_like, temp_min, temp_max, humidity } = main;
    const [txt] = weather;
    const { main: desc, icon } = txt;

    // changing background image and weather icon

    weatherIcon.src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.body.style.backgroundImage = `url(https://source.unsplash.com/1920x1080/?${city})`;

    // Sending files to change Markup

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

    // sending cordinates to get aqi

    aqi(coord);
  };

  cityToSearch();
};

export default weatherData;
