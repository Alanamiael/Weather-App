import { useEffect, useState } from 'react';
import Heading from './components/Heading';
import MainTable from './components/MainTable';
import MeterReadings from './components/MeterReadings';
import WeekWeather from './components/WeekWeather';
import cl from './styles/App.module.scss';
import { getTodayWeather } from './services/api-operations';
import {
  WeatherProps,
  TodayWeatherProps,
  FullDayProps,
} from './services/interfaces';

function App() {
  const [weekWeather, setWeekWeather] = useState<FullDayProps[]>();
  const [location, setLocation] = useState('Seoul');
  const [todayWeather, setTodayWeather] = useState<TodayWeatherProps>();
  const [theme, setTheme] = useState('dark');

  const handleSetData = ({
    weekWeatherData,
    todayWeatherData,
  }: WeatherProps) => {
    setTodayWeather(todayWeatherData);
    setWeekWeather(weekWeatherData);
  };

  useEffect(() => {
    getTodayWeather({ location, setData: handleSetData });
  }, []);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <div id={cl[theme]}>
      <div className={cl.app}>
        <Heading
          place={todayWeather?.location || ''}
          location={location}
          setLocation={setLocation}
          handleSetData={handleSetData}
          toggleTheme={toggleTheme}
          theme={theme}
        />
        <MainTable todayWeather={todayWeather} />
        <MeterReadings todayWeather={todayWeather} />
        <WeekWeather weekWeather={weekWeather} />
      </div>
    </div>
  );
}

export default App;
