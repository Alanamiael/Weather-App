import { FC, useMemo } from 'react';
import dayjs from 'dayjs';
import { formatDayTime, characteristics } from './helpers';
import { HourProps } from '../../services/interfaces';
import cl from './MainContentElement.module.scss';

interface MainContentElementProps {
  hoursWeather: HourProps[];
}

const MainContentElement: FC<MainContentElementProps> = ({ hoursWeather }) => {
  const formattedTime = dayjs(hoursWeather[0].time).format('H:mm');
  const dayTime = useMemo(() => formatDayTime(formattedTime), [formattedTime]);

  return (
    <div className={cl.container}>
      <h2 className={cl.title}>{dayTime}</h2>
      <div className={cl.wrapper}>
        <div className={cl.flexColumn}>
          <p className={cl.time}>{formattedTime}</p>
          <img
            src={hoursWeather[0].condition.icon}
            alt={hoursWeather[0].condition.text}
          />

          <div className={cl.flexColumn}>
            {characteristics.map((item) => (
              <p key={item} className={cl.info}>
                {String(hoursWeather[0][item])}
              </p>
            ))}
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
            {characteristics.map((item) => (
              <p key={item} className={cl.info}>
                {String(hoursWeather[1][item])}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentElement;
