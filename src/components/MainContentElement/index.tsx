import { FC } from 'react';
import dayjs from 'dayjs';
import cl from './MainContentElement.module.scss';

interface MainContentElementProps {
  hoursWeather: any;
}

const MainContentElement: FC<MainContentElementProps> = ({ hoursWeather }) => {
  return (
    <div className={cl.container}>
      <h2 className={cl.title}>Night</h2>
      <div className={cl.flex}>
        <div className={cl.flexColumn}>
          <p className={cl.time}>
            {dayjs(hoursWeather[0].time).format('H:mm')}
          </p>
          <img
            src={hoursWeather[0].condition.icon}
            alt={hoursWeather[0].condition.text}
          />
          <div className={cl.flexColumn}>
            <p className={cl.info}>{hoursWeather[0].temp_c}</p>
            <p className={cl.info}>{hoursWeather[0].feelslike_c}</p>
            <p className={cl.info}>{hoursWeather[0].pressure_mb}</p>
            <p className={cl.info}>{hoursWeather[0].humidity}</p>
            <p className={cl.info}>{hoursWeather[0].wind_kph}</p>
          </div>
        </div>
        <div className={cl.flexColumn}>
          <p className={cl.time}>
            {dayjs(hoursWeather[1].time).format('H:mm')}
          </p>
          <img
            src={hoursWeather[1].condition.icon}
            alt={hoursWeather[1].condition.text}
          />
          <div className={cl.flexColumn}>
            <p className={cl.info}>{hoursWeather[1].temp_c}</p>
            <p className={cl.info}>{hoursWeather[1].feelslike_c}</p>
            <p className={cl.info}>{hoursWeather[1].pressure_mb}</p>
            <p className={cl.info}>{hoursWeather[1].humidity}</p>
            <p className={cl.info}>{hoursWeather[1].wind_kph}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentElement;
