import cl from './MainTableHeadings.module.scss';

const MainTableHeadings = () => {
  return (
    <div className={cl.pStyleForHeadings}>
      <p>Temp, °C</p>
      <p>Feels Like</p>
      <p>Pressure, kPa</p>
      <p>Humidity, %</p>
      <p>Wind, km/h</p>
    </div>
  );
};

export default MainTableHeadings;
