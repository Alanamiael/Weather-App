import { useEffect, useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import Heading from './components/Heading';
import MainTable from './components/MainTable';
import MeterReadings from './components/MeterReadings';
import WeekWeather from './components/WeekWeather';
import cl from './styles/App.module.scss';

function App() {
  const [data, setData] = useState();
  const [location, setLocation] = useState('Seoul');
  const [todayWeather, setTodayWeather] = useState(null);

  const url = `http://api.weatherapi.com/v1/forecast.json?key=17793347648846f1a1d115955230611&q=${location}&days=7&aqi=no&alerts=no`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        console.log(response.data);
        setTodayWeather({
          ...response.data.current,
          hour: response.data.forecast.forecastday[0].hour.filter((item: any) =>
            [2, 5, 8, 11, 14, 17, 20, 23].includes(
              +dayjs(item.time).format('H'),
            ),
          ),
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {}, []);

  console.log(todayWeather);

  console.log(data);

  return (
    <div className={cl.app}>
      <Heading
        setData={setData}
        location={location}
        setLocation={setLocation}
        setTodayWeather={setTodayWeather}
        url={url}
      />
      <MainTable todayWeather={todayWeather} />
      <MeterReadings />
      <WeekWeather data={data} />
    </div>
  );
}

export default App;
