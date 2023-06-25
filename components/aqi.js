const aqiText = document.querySelector(".aqiContainer");
const aqiImg = document.querySelector(".aqiImg");
function aqi(coord) {
  const { lon, lat } = coord;
  const fecthingAqi = async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=aba6ff9d6de967d5eac6fd79114693cc`
    );
    const aqiData = await res.json();
    const { list } = aqiData;
    const aqiNumber = list[0].main.aqi;
    checkingQuality(aqiNumber);
  };
  function checkingQuality(aqi, color) {
    console.log(aqi);
    if (aqi === 1) {
      changingMarkup(aqi, "#1CE345");
    }
    if (aqi === 2) {
      changingMarkup(aqi, "#F0EA0F");
    }
    if (aqi === 3) {
      changingMarkup(aqi, "#F99006");
    }
    if (aqi === 4) {
      changingMarkup(aqi, "#CE5331");
    }
    if (aqi === 5) {
      changingMarkup(aqi, "#D82755");
    }
  }
  function changingMarkup(aqi, color) {
    aqiText.classList.add("aqi");
    aqiText.textContent = aqi;
    aqiText.style.backgroundColor = color;
    aqiImg.classList.add("hide");
  }
  fecthingAqi();
}
export default aqi;
