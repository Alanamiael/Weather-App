import UVReadings from '../UVReadings';
import SunsetReadings from '../SunsetReadings';
import HumidityReadings from '../HumidityReadinds';
import cl from './MeterReadings.module.scss';

const MeterReadings = () => {
  return (
    <div className={cl.flex}>
      <UVReadings />
      <SunsetReadings />
      <HumidityReadings />
    </div>
  );
};

export default MeterReadings;
