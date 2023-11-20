import { FC } from 'react';
import { useSunsetTerms } from './SunsetInfo';
import sunIcon from '/icons/sun.svg';
import cl from './SunsetReadings.module.scss';

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
  // const [sunAnimation, setSunAnimation] = useState();
  const { sunAnimation } = useSunsetTerms({ currentTime, sunrise, sunset });

  // useEffect(() => {
  //   setSunAnimation(useSunsetTerms());
  // });

  return (
    <div className={cl.container}>
      <h4>Sunrise and Sunset</h4>
      <div className={cl.imgWrapper}>
        <div className={cl.sunTimes}>
          <div className={cl.sunPath}>
            <div className={cl.sunAnimation} style={sunAnimation?.backgrnd} />
          </div>
          <div className={cl.sunSymbolPath}>
            <span className={cl.symbol} style={sunAnimation?.sun}>
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
