import axios from 'axios';
import dayjs from 'dayjs';

export const getWeather = async (location: string) => {
  try {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=17793347648846f1a1d115955230611&q=${location}&days=7&aqi=no&alerts=no`;
    const response = await axios.get(url);
    const APIData = response.data;
    return APIData;
  } catch (error) {
    console.log(error);
  }
};

export const getTodayWeather = async ({
  location,
  setData,
}: {
  location: string;
  setData: (arg: any) => void;
}) => {
  try {
    const url = `http://api.weatherapi.com/v1/forecast.json?key=17793347648846f1a1d115955230611&q=${location}&days=7&aqi=no&alerts=no`;
    const response = await axios.get(url);
    const APIData = response.data;
    const APITodayWeather = {
      ...APIData.current,
      location: `${APIData.location.name}, ${APIData.location.country}`,
      currentTime: APIData.location.localtime,
      astro: APIData.forecast.forecastday[0].astro,
      hour: APIData.forecast.forecastday[0].hour.filter((item: any) =>
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
