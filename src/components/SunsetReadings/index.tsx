import sunIcon from '/icons/sun.svg';
import cl from './SunsetReadings.module.scss';
import { FC, useMemo } from 'react';
import { twentyFourFormat } from './SunsetInfo';

interface SunsetReadingsProps {
  sunrise: string;
  sunset: string;
  currentTime: string;
}

const SunsetReadings: FC<SunsetReadingsProps> = ({
  sunrise,
  sunset,
  currentTime,
}) => {
  let widthAnima = '0%';
  const time = useMemo(() => {
    if (sunset && sunrise && currentTime) {
      if (+currentTime === +sunrise[1] || +currentTime < +sunrise[1]) {
        widthAnima = '0';
        return {
          bottom: '-10px',
          left: '11px',
        };
      }
      if (
        +currentTime === +twentyFourFormat[+sunset[1]] ||
        +currentTime > +twentyFourFormat[+sunset[1]]
      ) {
        widthAnima = '100%';
        return {
          bottom: '-11px',
          left: '218px',
        };
      }
      if (+currentTime - +sunrise[1] < 6) {
        widthAnima = '25%';
        return {
          bottom: '40px',
          left: '47px',
        };
      }
      if (+currentTime - +sunrise[1] === 6) {
        widthAnima = '50%';
        return {
          bottom: '63px',
          left: '115px',
        };
      }
      if (+currentTime - +sunrise[1] > 6) {
        widthAnima = '75%';
        return {
          bottom: '47px',
          left: '170px',
        };
      }
    }

    return {
      bottom: '-10px',
      left: '11px',
    };
  }, [sunset, sunrise, currentTime]);

  console.log(time);

  return (
    <div className={cl.container}>
      <h4>Sunrise and Sunset</h4>
      <div className={cl.sunTimes}>
        <div className={cl.sunPath}>
          <div className={cl.sunAnimation} style={{ width: widthAnima }} />
        </div>
        <div className={cl.sunSymbolPath}>
          <span className={cl.symbol} style={time}>
            <img src={sunIcon} alt="sunIcon" />
          </span>
        </div>
      </div>
      <div className={cl.legend}>
        <div className={cl.sunrise}>
          <p>Sunrise</p>
          {sunrise}
        </div>

        <div className={cl.sunset}>
          <p>Sunset</p> {sunset}
        </div>
      </div>
      <div className={cl.clear}>&nbsp;</div>
    </div>
  );
};

export default SunsetReadings;
