// importing needed elements
import rounding from "./helper";
import {
  weatherText,
  weatherTemp,
  currState,
  windSpeed,
  Humidity,
  feelLike,
  minTemp,
  maxTemp,
  Country,
} from "./domelements";
// displaying the output
function changingMarkup(
  desc,
  temp,
  feels_like,
  temp_min,
  temp_max,
  humidity,
  country,
  speed,
  city
) {
  weatherText.textContent = city;
  weatherTemp.textContent = `${rounding(temp)}°C`;
  currState.textContent = desc;
  windSpeed.textContent = `Wind: ${speed}K/h`;
  Humidity.textContent = `Humid: ${humidity}`;
  feelLike.textContent = `${rounding(feels_like)}°C`;
  minTemp.textContent = `${rounding(temp_min)}°C`;
  maxTemp.textContent = `${rounding(temp_max)}°C`;
  Country.textContent = country;
}
export default changingMarkup;
