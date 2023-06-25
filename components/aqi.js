const aqiText = document.querySelector(".aqiContainer");
const aqiImg = document.querySelector(".aqiImg");
function aqi(coord) {
  const { lon, lat } = coord;
  const fecthingAqi = async () => {
    const res = await fetch(
      `https://api.waqi.info/feed/geo:${lat};${lon}/?token=33aafde43648849f0f2926a25c6f09042f01983f`
    );
    const aqiData = await res.json();
    const { data } = aqiData;
    checkingQuality(data["aqi"]);
  };
  function checkingQuality(aqi) {
    if (aqi < 100) {
      changingMarkup(aqi, "#1CE345");
    } else if (aqi < 150) {
      changingMarkup(aqi, "#F0EA0F");
    } else if (aqi < 250) {
      changingMarkup(aqi, "#F99006");
    } else if (aqi < 300) {
      changingMarkup(aqi, "#D82711");
    } else if (aqi < 500) {
      changingMarkup("🚷", "#D82755");
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
