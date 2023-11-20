import axios from 'axios';
import dayjs from 'dayjs';
import { HourProps, WeatherProps } from './interfaces';

const API_KEY = import.meta.env.VITE_API_KEY;
export const getTodayWeather = async ({
  location,
  setData,
}: {
  location: string;
  setData: (arg: WeatherProps) => void;
}) => {
  try {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&days=7&aqi=no&alerts=no`;

    const response = await axios.get(url);
    const APIData = response.data;
    const APITodayWeather = {
      ...APIData.current,
      location: `${APIData.location.name}, ${APIData.location.country}`,
      currentTime: APIData.location.localtime,
      astro: APIData.forecast.forecastday[0].astro,
      hour: APIData.forecast.forecastday[0].hour.filter((item: HourProps) =>
        [2, 5, 8, 11, 14, 17, 20, 23].includes(+dayjs(item.time).format('H')),
      ),
    };

    setData({
      todayWeatherData: APITodayWeather,
      weekWeatherData: APIData.forecast?.forecastday,
    });
  } catch (error) {
    console.log(error);
  }
};
