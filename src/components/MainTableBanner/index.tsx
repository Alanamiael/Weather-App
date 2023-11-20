import { FC } from 'react';
import { TodayWeatherProps } from '../../services/interfaces';
import cl from './MainTableBanner.module.scss';

interface MainTableBannerProps {
  todayWeather: TodayWeatherProps | undefined;
}

const MainTableBanner: FC<MainTableBannerProps> = ({ todayWeather }) => {
  let todayIcon: string | string[] | undefined =
    todayWeather?.condition?.icon.split('/');
  if (todayIcon && todayIcon.length > 4) {
    todayIcon[4] = '128x128';
    todayIcon = todayIcon.join('/');
    todayIcon.toString();
  }

  console.log(todayIcon);
  return (
    <div className={cl.container}>
      <img alt="clouds" src={todayIcon as string} />
      <h1>{todayWeather?.temp_c}°C</h1>
    </div>
  );
};

export default MainTableBanner;
