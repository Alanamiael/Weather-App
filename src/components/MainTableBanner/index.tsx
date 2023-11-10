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
    <div className={cl.container}>
      <img alt="clouds" src={todayWeather?.condition?.icon} />
      <h1>{todayWeather?.temp_c}°C</h1>
    </div>
  );
};

export default MainTableBanner;
