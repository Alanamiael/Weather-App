import MainContentElement from '../MainContentElement';
import MainTableHeadings from '../MainTableHeadings';
import cl from './MainContent.module.scss';

const MainContent = ({ todayWeatherHours }: { todayWeatherHours: any }) => {
  return (
    <div className={cl.container}>
      <MainTableHeadings />
      {todayWeatherHours?.map((item: unknown, index: number) => {
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
