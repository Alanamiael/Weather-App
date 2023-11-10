import { FC } from 'react';
import dayjs from 'dayjs';
import UVReadings from '../UVReadings';
import SunsetReadings from '../SunsetReadings';
import HumidityReadings from '../HumidityReadinds';
import cl from './MeterReadings.module.scss';

interface MeterReadingsProps {
  todayWeather: any;
}
const MeterReadings: FC<MeterReadingsProps> = ({ todayWeather }) => {
  return (
    <div className={cl.container}>
      <UVReadings uv={todayWeather?.uv} />
      <SunsetReadings
        currentTime={dayjs(todayWeather?.currentTime).format('H')}
        sunrise={todayWeather?.astro?.sunrise}
        sunset={todayWeather?.astro?.sunset}
      />
      <HumidityReadings humidity={todayWeather?.humidity} />
    </div>
  );
};

export default MeterReadings;
