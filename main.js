import "./style.css";

const card = document.querySelector(".card");
card.addEventListener("mousemove", (e) => {
  const { clientX: x, clientY: y } = e;

  const middelX = window.innerWidth / 2,
    middelY = window.innerHeight / 2;
  card.classList.remove("transition");
  const offsetX = ((x - middelX) / middelX) * 20,
    offsetY = ((y - middelY) / middelY) * 20;
  card.style.setProperty("--rotate-X", `${-1 * offsetY}deg`);
  card.style.setProperty("--rotate-Y", `${offsetX}deg`);
});
card.addEventListener("mouseleave", (e) => {
  card.style.setProperty("--rotate-X", `${0}deg`);
  card.style.setProperty("--rotate-Y", `${0}deg`);
  card.classList.add("transition");
});
import weatherData from "./components/weather";
weatherData();
