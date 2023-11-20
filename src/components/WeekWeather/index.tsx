import { FC } from 'react';
import DayWeather from '../DayWeather';
import { FullDayProps } from '../../services/interfaces';
import cl from './WeekWeather.module.scss';

interface WeekWeatherProps {
  weekWeather: FullDayProps[] | undefined;
}

const WeekWeather: FC<WeekWeatherProps> = ({ weekWeather }) => {
  return (
    <div className={cl.container}>
      {weekWeather
        ?.slice(1, 7)
        .map((forecastDay) => (
          <DayWeather key={forecastDay.date} data={forecastDay} />
        ))}
    </div>
  );
};

export default WeekWeather;
