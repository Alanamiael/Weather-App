import { FC } from 'react';
import DayWeather from '../DayWeather';
import cl from './WeekWeather.module.scss';

interface WeekWeatherProps {
  data: any;
}

const WeekWeather: FC<WeekWeatherProps> = ({ data }) => {
  return (
    <div className={cl.flex}>
      <DayWeather data={data?.forecast?.forecastday[1]} />
      <DayWeather data={data?.forecast?.forecastday[2]} />
      <DayWeather data={data?.forecast?.forecastday[3]} />
      <DayWeather data={data?.forecast?.forecastday[4]} />
      <DayWeather data={data?.forecast?.forecastday[5]} />
      <DayWeather data={data?.forecast?.forecastday[6]} />
    </div>
  );
};

export default WeekWeather;
