import { useEffect, useState } from 'react';
import Heading from './components/Heading';
import MainTable from './components/MainTable';
import MeterReadings from './components/MeterReadings';
import WeekWeather from './components/WeekWeather';
import cl from './styles/App.module.scss';
import { getTodayWeather } from './services/api-operations';

function App() {
  const [weekWeather, setWeekWeather] = useState();
  const [location, setLocation] = useState('Seoul');
  const [todayWeather, setTodayWeather] = useState(null);
  const [theme, setTheme] = useState('dark');

  const handleSetData = ({ weekWeatherData, todayWeatherData }) => {
    setTodayWeather(todayWeatherData);
    setWeekWeather(weekWeatherData);
  };

  useEffect(() => {
    getTodayWeather({ location, setData: handleSetData });
  }, []);

  console.log(todayWeather);
  console.log(weekWeather);

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  return (
    <div id={cl[theme]}>
      <div className={cl.app}>
        <Heading
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
