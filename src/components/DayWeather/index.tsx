import { FC } from 'react';

import dayjs from 'dayjs';
import cl from './DayWeather.module.scss';

interface DayWeatherProps {
  data: any;
}

const DayWeather: FC<DayWeatherProps> = ({ data }) => {
  return (
    <div className={cl.dayWeather}>
      <div className={cl.dayWeather__date}>
        <h2>{dayjs(data?.date).format('ddd')}</h2>
        <h3>{dayjs(data?.date).format('DD MMMM')}</h3>
      </div>

      <div className={cl.dayWeather__info}>
        <img src={data?.day.condition.icon} alt={data?.day.condition.text} />
        <div>
          <p className={cl.maxTemp}>{data?.day.maxtemp_c}°</p>
          <p className={cl.minTemp}>{data?.day.mintemp_c}°</p>
        </div>
      </div>
    </div>
  );
};

export default DayWeather;
