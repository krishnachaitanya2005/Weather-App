import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox() {
	const INIT_URL =
		"https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

	let info = {
		city: "Delhi",
		feelsLike: 17.11,
		humidity: 88,
		temp: 17.05,
		tempMax: 17.05,
		tempMin: 17.05,
		weather: "Mist",
	};

	return (
		<div className="InfoBox">
			<h1>Weather Info - {info.weather}</h1>

			<Card sx={{ maxWidth: 345 }}>
				<CardMedia sx={{ height: 140 }} image={INIT_URL} title="green iguana" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{info.city}
					</Typography>
					<Typography
						variant="body2"
						component="div"
						sx={{ color: "text.secondary" }}
					>
						<div>Temperature = {info.temp}&deg;C</div>
						<div>Humidity = {info.humidity}</div>
						<div>Min-Temp = {info.tempMin}&deg;C</div>
						<div>Max-Temp = {info.tempMax}&deg;C</div>
						<div>
							Weather can be described as {info.weather} and it feels like{" "}
							{info.feelsLike}&deg;C
						</div>
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
