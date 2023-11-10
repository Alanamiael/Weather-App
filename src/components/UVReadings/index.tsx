import { FC } from 'react';
import cl from './UVReadings.module.scss';
import { UVInfo } from './UVInfo';

interface UVReadingsProps {
  uv: number;
}
const UVReadings: FC<UVReadingsProps> = ({ uv }) => {
  return (
    <div className={cl.container}>
      <div className={cl.wrapper}>
        <h4>UV Index</h4>
        <p>{uv} UV</p>
      </div>
      <UVInfo uv={uv} />
    </div>
  );
};

export default UVReadings;
