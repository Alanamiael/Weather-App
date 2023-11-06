import { FC } from 'react';
import dayjs from 'dayjs';
import MainTableBanner from '../MainTableBanner';
import MainContent from '../MainContent';
import cl from './MainTable.module.scss';

interface MainTableProps {
  todayWeather: any;
}

const MainTable: FC<MainTableProps> = ({ todayWeather }) => {
  return (
    <div className={cl.mainTable}>
      <h3>{dayjs().format('DD MMMM, YYYY')}</h3>
      <div className={cl.mainTable__info}>
        <MainTableBanner todayWeather={todayWeather} />
        <MainContent todayWeatherHours={todayWeather?.hour} />.
      </div>
    </div>
  );
};

export default MainTable;
