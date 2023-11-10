import { FC } from 'react';
import dayjs from 'dayjs';
import cl from './MainContentElement.module.scss';

interface MainContentElementProps {
  hoursWeather: any;
}

const helpers = [
  'temp_c',
  'feelslike_c',
  'pressure_mb',
  'humidity',
  'wind_kph',
];
const MainContentElement: FC<MainContentElementProps> = ({ hoursWeather }) => {
  let dayTime = '';
  const formattedTime = dayjs(hoursWeather[0].time).format('H:mm');
  if (formattedTime === '2:00') {
    dayTime = 'Night';
  } else if (formattedTime === '8:00') {
    dayTime = 'Morning';
  } else if (formattedTime === '14:00') {
    dayTime = 'Day';
  } else {
    dayTime = 'Evening';
  }

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
            {helpers.map((item) => (
              <p key={item} className={cl.info}>
                {hoursWeather[0][item]}
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
            {helpers.map((item) => (
              <p key={item} className={cl.info}>
                {hoursWeather[1][item]}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentElement;
