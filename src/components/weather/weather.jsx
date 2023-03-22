export default function Weather({ currentWeather }) {
  return (
    <div className="weatherWrapper">
      <h2>
        temperature:{" "}
        <span className="primary">{currentWeather.temperature}</span> degrees
      </h2>
      <h2> {currentWeather.condition}</h2>
      <h2>
        {currentWeather.isGoodWeather ? "Weather is great!" : "Weather sucks.."}
      </h2>
    </div>
  );
}
