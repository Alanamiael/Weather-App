import { FC } from 'react';
import { HumidityInfo } from './HumidityInfo';
import cl from './HumidityReadings.module.scss';

interface HumidityReadingsProps {
  humidity: number;
}

const HumidityReadings: FC<HumidityReadingsProps> = ({ humidity }) => {
  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <h4>Humidity</h4>
        <p>{humidity}%</p>
      </div>
      <HumidityInfo humidity={humidity} />
    </div>
  );
};

export default HumidityReadings;
