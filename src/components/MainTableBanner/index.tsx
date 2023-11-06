import mist from '/images/mist.png';
import cl from './MainTableBanner.module.scss';

const MainTableBanner = () => {
  return (
    <div className={cl.flex}>
      <h3> October, 2022 11:30</h3>
      <img alt="clouds" src={mist} />
      <h2>+16°C</h2>
    </div>
  );
};

export default MainTableBanner;
