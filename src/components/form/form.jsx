export default function Form({ onAddEntry }) {
  const submitData = (event) => {
    event.preventDefault();
    return Object.fromEntries(new FormData(event.target));
  };

  return (
    <form
      action=""
      onSubmit={(event) => {
        onAddEntry(submitData(event));
      }}
    >
      <label htmlFor="activity" name="activity">
        Activity
      </label>
      <input id="activity" name="activity" type="text" />
      <div className="checkboxWrapper">
        <label htmlFor="isGoodWeather" name="isGoodWeather">
          Is this a 'good-weather' activity?
        </label>
        <input type="checkbox" id="isGoodWeather" name="isGoodWeather" />
      </div>
      <button type="submit">Submit!</button>
    </form>
  );
}
