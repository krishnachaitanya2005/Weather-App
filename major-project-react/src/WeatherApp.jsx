import SearchBox from "./searchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
	const [weatherInfo, setWeatherInfo] = useState({
		city: "Wonderland",
		feelsLike: 17.11,
		humidity: 88,
		temp: 17.05,
		tempMax: 17.05,
		tempMin: 17.05,
		weather: "Mist",
	});

	let updateInfo = (newInfo) => {
		setWeatherInfo(newInfo);
	};
	return (
		<div style={{ textAlign: "center" }}>
			<h1>Weather App</h1>
			<SearchBox updateInfo={updateInfo} />
			<InfoBox info={weatherInfo} />
		</div>
	);
}
