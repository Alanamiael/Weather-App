import { FC } from 'react';
import cl from './MainTableBanner.module.scss';

interface MainTableBannerProps {
  todayWeather: {
    hour: number;
    temp_c: number;
    condition: { icon: string };
  } | null;
}

const MainTableBanner: FC<MainTableBannerProps> = ({ todayWeather }) => {
  return (
    <div className={cl.flex}>
      <img alt="clouds" src={todayWeather?.condition.icon} />
      <h2>{todayWeather?.temp_c}°C</h2>
    </div>
  );
};

export default MainTableBanner;
