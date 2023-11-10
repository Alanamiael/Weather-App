import { tempCharacteristics } from './helpers';
import cl from './MainTableHeadings.module.scss';

const MainTableHeadings = () => {
  return (
    <div className={cl.weatherCharacteristics}>
      {tempCharacteristics.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default MainTableHeadings;
