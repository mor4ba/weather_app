import "./App.css";
import useLocalStorageState from "use-local-storage-state";
import Entrylist from "./components/entrylist/entrylist";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Form from "./components/form/form";
import Weather from "./components/weather/weather";
import { useState } from "react";
import { useEffect } from "react";
import { uid } from "uid";

export default function App() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: [],
  });

  const [weather, setWeather] = useState({
    temperature: "10",
    condition: "☀️",
    isGoodWeather: true,
  });

  function handleAddEntry(newEntry) {
    setEntries([{ id: uid(), ...newEntry }, ...entries]);
  }

  useEffect(() => {
    const interval = setInterval(fetchApi, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [weather]);

  async function fetchApi() {
    const response = await fetch("https://example-apis.vercel.app/api/weather");
    const data = await response.json();
    setWeather(data);
  }

  function removeEntry(id) {
    setEntries(entries.filter((entry) => entry.id !== id));
  }

  const badWeatherEntries = entries.filter((entry) => !entry.isGoodWeather);
  const goodWeatherEntries = entries.filter((entry) => entry.isGoodWeather);

  return (
    <>
      <Header />
      <Weather currentWeather={weather} />
      <Form onAddEntry={handleAddEntry} />

      <Entrylist
        activities={
          weather.isGoodWeather ? goodWeatherEntries : badWeatherEntries
        }
        onRemoveEntry={removeEntry}
      />

      <Footer />
    </>
  );
}
