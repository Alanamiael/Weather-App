import { FC } from 'react';
import DayWeather from '../DayWeather';
import cl from './WeekWeather.module.scss';

interface WeekWeatherProps {
  weekWeather: any;
}

const WeekWeather: FC<WeekWeatherProps> = ({ weekWeather }) => {
  return (
    <div className={cl.container}>
      {weekWeather
        ?.slice(1, 7)
        .map((forecastDay: any) => (
          <DayWeather key={forecastDay.date} data={forecastDay} />
        ))}
    </div>
  );
};

export default WeekWeather;
