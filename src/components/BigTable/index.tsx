import cl from './BigTable.module.scss';

const BigTable = () => {
  return (
    <div className={cl.container}>
      <div className={cl.wind}>Wind, km/h</div>
      <div className={cl.humidity}>Humidity, %</div>
      <div className={cl.pressure}>Pressure, kPa</div>
      <div className={cl.feelsTemp}>Feels Like</div>
      <div className={cl.temp}>Temp, °C</div>
      <div className={cl.night}>Night</div>
      <div className={cl.morning}>Morning</div>
      <div className={cl.day}>Day</div>
      <div className={cl.evening}>Evening</div>
      <div className={cl.nightTime1}>2:00</div>
      <div className={cl.nightTime2}>5:00</div>
      <div className={cl.morningTime1}>8:00</div>
      <div className={cl.morningTime2}>11:00</div>
      <div className={cl.dayTime1}>14:00</div>
      <div className={cl.dayTime2}>17:00</div>
      <div className={cl.eveningTime1}>20:00</div>
      <div className={cl.eveningTime2}>23:00</div>
      <div className={cl.nightWeather1}></div>
      <div className={cl.nightWeather2}></div>
      <div className={cl.morningWeather1}></div>
      <div className={cl.morningWeather2}></div>
      <div className={cl.dayWeather1}></div>
      <div className={cl.dayWeather2}></div>
      <div className={cl.eveningWeather1}></div>
      <div className={cl.eveningWeather2}></div>
      <div className={cl.nightTemp1}>+7°</div>
      <div className={cl.nightTemp2}>+9°</div>
      <div className={cl.morningTemp1}>+10°</div>
      <div className={cl.morningTemp2}>+11°</div>
      <div className={cl.dayTemp1}>+14°</div>
      <div className={cl.dayTemp2}>+16°</div>
      <div className={cl.eveningTemp1}>+12°</div>
      <div className={cl.eveningTemp2}>+9°</div>
      <div className={cl.nightFeelsTemp1}>+7°</div>
      <div className={cl.nightFeelsTemp2}>+9°</div>
      <div className={cl.morningFeelsTemp1}>+10°</div>
      <div className={cl.morningFeelsTemp2}>+12°</div>
      <div className={cl.dayFeelsTemp1}>+16°</div>
      <div className={cl.dayFeelsTemp2}>+16°</div>
      <div className={cl.eveningFeelsTemp1}>+12°</div>
      <div className={cl.eveningFeelsTemp2}>+9°</div>
      <div className={cl.nightPressure1}>760</div>
      <div className={cl.nightPressure2}>759</div>
      <div className={cl.morningPressure1}>760</div>
      <div className={cl.morningPressure2}>759</div>
      <div className={cl.dayPressure1}>768</div>
      <div className={cl.dayPressure2}>756</div>
      <div className={cl.eveningPressure1}>756</div>
      <div className={cl.eveningPressure2}>756</div>
      <div className={cl.nightHumidity1}>55</div>
      <div className={cl.nightHumidity2}>41</div>
      <div className={cl.morningHumidity1}>55</div>
      <div className={cl.morningHumidity2}>41</div>
      <div className={cl.dayHumidity1}>40</div>
      <div className={cl.dayHumidity2}>33</div>
      <div className={cl.eveningHumidity1}>12</div>
      <div className={cl.eveningHumidity2}>11</div>
      <div className={cl.nightWind1}>5</div>
      <div className={cl.nightWind2}>5</div>
      <div className={cl.morningWind1}>2</div>
      <div className={cl.morningWind2}>2</div>
      <div className={cl.dayWind1}>5</div>
      <div className={cl.dayWind2}>6</div>
      <div className={cl.eveningWind1}>11</div>
      <div className={cl.eveningWind2}>6</div>
    </div>
  );
};

export default BigTable;
