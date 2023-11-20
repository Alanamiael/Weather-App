import { FC } from 'react';
import { HourProps } from '../../services/interfaces';
import MainContentElement from '../MainContentElement';
import MainTableHeadings from '../MainTableHeadings';
import cl from './MainContent.module.scss';

interface MainContentProps {
  todayWeatherHours: HourProps[] | undefined;
}

const MainContent: FC<MainContentProps> = ({ todayWeatherHours }) => {
  return (
    <div className={cl.container}>
      <MainTableHeadings />
      {todayWeatherHours?.map((item, index: number) => {
        if (index % 2 === 0) {
          return (
            <MainContentElement
              hoursWeather={[item, todayWeatherHours[index + 1]]}
              key={JSON.stringify(item)}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default MainContent;
