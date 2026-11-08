import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";


const BG_IMAGES = {
    clear: "https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=1920&q=80",
    clouds: "https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1920&q=80",
    rain: "https://images.unsplash.com/photo-1519692933481-e162a57d6721?auto=format&fit=crop&w=1920&q=80",
    drizzle: "https://images.unsplash.com/photo-1556485689-33e55ab56127?auto=format&fit=crop&w=1920&q=80",
    thunderstorm: "https://images.unsplash.com/photo-1605727216801-e27ce1d0cc28?auto=format&fit=crop&w=1920&q=80",
    snow: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&w=1920&q=80",
    haze: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1920&q=80",
    default: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80",
};

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bern",
        feelsLike: 10.38,
        humidity: 73,
        temp: 11.29,
        tempMax: 11.29,
        tempMin: 11.29,
        weather: "clear sky"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    const getBackgroundImage = () => {
        const desc = weatherInfo.weather?.toLowerCase() || "";
        if (desc.includes("clear") || desc.includes("sun")) return BG_IMAGES.clear;
        if (desc.includes("cloud")) return BG_IMAGES.clouds;
        if (desc.includes("thunder")) return BG_IMAGES.thunderstorm;
        if (desc.includes("rain")) return BG_IMAGES.rain;
        if (desc.includes("drizzle")) return BG_IMAGES.drizzle;
        if (desc.includes("snow")) return BG_IMAGES.snow;
        if (desc.includes("mist") || desc.includes("fog") || desc.includes("haze")) return BG_IMAGES.haze;
        return BG_IMAGES.default;
    };

    return (
        <div
            className="app-wrapper"
            style={{ backgroundImage: `url(${getBackgroundImage()})` }}
        >
            <div className="app-backdrop">
                <div className="content-container">
                    <h2 className="app-heading">Weather Forecast</h2>
                    <SearchBox updateInfo={updateInfo} />
                    <InfoBox info={weatherInfo} />
                </div>
            </div>
        </div>
    );
};