import { FC } from 'react';
import dayjs from 'dayjs';
import cl from './DayWeather.module.scss';
import { FullDayProps } from '../../services/interfaces';

interface DayWeatherProps {
  data: FullDayProps;
}

const DayWeather: FC<DayWeatherProps> = ({ data }) => {
  const {
    date,
    day: { condition, maxtemp_c: maxTemp, mintemp_c: minTemp },
  } = data;
  return (
    <div className={cl.dayWeather}>
      <div className={cl.dayWeather__date}>
        <h4>{dayjs(date).format('ddd')}</h4>
        <span>{dayjs(date).format('DD MMMM')}</span>
      </div>

      <div className={cl.dayWeather__info}>
        <img src={condition.icon} alt={condition.text} />
        <div>
          <p className={cl.maxTemp}>{maxTemp}°</p>
          <p className={cl.minTemp}>{minTemp}°</p>
        </div>
      </div>
    </div>
  );
};

export default DayWeather;
