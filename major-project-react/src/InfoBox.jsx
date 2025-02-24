import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
	const INIT_URL =
		"https://images.unsplash.com/photo-1722858343990-1604f540c15d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
	const COLD_URL =
		"https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
	const HOT_URL =
		"https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
	const RAIN_URL =
		"https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";
	return (
		<div className="InfoBox">
			<div className="cardContainer">
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image={
							info.humidity > 80
								? RAIN_URL
								: info.temp > 15
								? HOT_URL
								: COLD_URL
						}
						title="green iguana"
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{info.city}
							{info.humidity > 80 ? (
								<ThunderstormIcon />
							) : info.temp > 15 ? (
								<WbSunnyIcon />
							) : (
								<AcUnitIcon />
							)}
						</Typography>
						<Typography
							variant="body2"
							component="div"
							sx={{ color: "text.secondary" }}
						>
							<div>Temperature = {info.temp}&deg;C</div>
							<br />
							<div>Humidity = {info.humidity}</div>
							<br />
							<div>Min - Temp = {info.tempMin}&deg;C</div>
							<br />
							<div>Max - Temp = {info.tempMax}&deg;C</div>
							<br />
							<div>
								Weather can be described as {info.weather} and it feels like{" "}
								{info.feelsLike}&deg;C
							</div>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
