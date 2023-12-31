import { Dispatch, FC, SetStateAction } from 'react';
import ReactSwitch from 'react-switch';
import cl from './Heading.module.scss';
import searchIcon from '/icons/searchIcon.svg';
import { DayIcon, NightIcon } from './icons';
import { getTodayWeather } from '../../services/api-operations';
import { WeatherProps } from '../../services/interfaces';

interface HeadingProps {
  location: string;
  setLocation: Dispatch<SetStateAction<string>>;
  place: string;
  toggleTheme: () => void;
  theme: string;
  handleSetData: ({ weekWeatherData, todayWeatherData }: WeatherProps) => void;
}

const Heading: FC<HeadingProps> = ({
  location,
  setLocation,
  handleSetData,
  toggleTheme,
  theme,
  place,
}) => {
  const searchLocation = () => {
    getTodayWeather({ location, setData: handleSetData });
  };

  return (
    <div className={cl.heading}>
      <p>{place}</p>

      <div className={cl.searchInputWrapper}>
        <ReactSwitch
          uncheckedIcon={DayIcon}
          checkedIcon={NightIcon}
          offColor="#efefef"
          onColor="#080338"
          onChange={toggleTheme}
          checked={theme === 'dark'}
          className={cl.toggle}
        />
        <div className={cl.hoverForButton}>
          <button
            type="button"
            className={cl.searchButton}
            onClick={() => {
              searchLocation();
            }}
          >
            <img src={searchIcon} alt="search" className={cl.searchIcon} />
          </button>
        </div>
        <input
          className={cl.searchInput}
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
        />{' '}
      </div>
    </div>
  );
};

export default Heading;
