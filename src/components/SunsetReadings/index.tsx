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
  const time = useMemo(() => {
    if (sunset && sunrise && currentTime) {
      if (+currentTime === +sunrise[1] || +currentTime < +sunrise[1]) {
        return {
          sun: {
            bottom: '-10px',
            left: '11px',
          },
          backgrnd: {
            width: '0%',
          },
        };
      }
      if (
        +currentTime === +twentyFourFormat[+sunset[1]] ||
        +currentTime > +twentyFourFormat[+sunset[1]]
      ) {
        return {
          sun: {
            bottom: '-11px',
            left: '218px',
          },
          backgrnd: {
            width: '100%',
          },
        };
      }
      if (+currentTime - +sunrise[1] < 6) {
        return {
          sun: {
            bottom: '40px',
            left: '47px',
          },
          backgrnd: {
            width: '20%',
          },
        };
      }
      if (+currentTime - +sunrise[1] === 6) {
        return {
          sun: {
            bottom: '63px',
            left: '115px',
          },
          backgrnd: {
            width: '50%',
          },
        };
      }
      if (+currentTime - +sunrise[1] > 6) {
        return {
          sun: {
            bottom: '47px',
            left: '170px',
          },
          backgrnd: {
            width: '80%',
          },
        };
      }
    }

    return {
      sun: {
        bottom: '-10px',
        left: '11px',
      },
      backgrnd: {
        width: '0%',
      },
    };
  }, [sunset, sunrise, currentTime]);

  return (
    <div className={cl.container}>
      <h4>Sunrise and Sunset</h4>
      <div className={cl.imgWrapper}>
        <div className={cl.sunTimes}>
          <div className={cl.sunPath}>
            <div className={cl.sunAnimation} style={time.backgrnd} />
          </div>
          <div className={cl.sunSymbolPath}>
            <span className={cl.symbol} style={time.sun}>
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
      </div>
    </div>
  );
};

export default SunsetReadings;
