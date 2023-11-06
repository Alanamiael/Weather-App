import { FC } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import cl from './Heading.module.scss';
import searchIcon from '/icons/searchIcon.svg';

interface HeadingProps {
  setData: React.Dispatch<React.SetStateAction<undefined>>;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  url: string;
  setTodayWeather: any;
}

const Heading: FC<HeadingProps> = ({
  setData,
  location,
  setLocation,
  setTodayWeather,
  url,
}) => {
  const searchLocation = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      setTodayWeather({
        ...response.data.current,
        hour: response.data.forecast.forecastday[0].hour.filter((item: any) =>
          [2, 5, 8, 11, 14, 17, 20, 23].includes(+dayjs(item.time).format('H')),
        ),
      });
    });
  };

  return (
    <div className={cl.heading}>
      <h1>{location}</h1>
      <div className="searchInputWrapper">
        <button
          type="button"
          className={cl.searchButton}
          onClick={() => {
            searchLocation();
          }}
        >
          <img src={searchIcon} alt="search" className={cl.searchIcon} />
        </button>

        <input
          className={cl.myInput}
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          placeholder="Enter Location"
          type="text"
        />
      </div>
    </div>
  );
};

export default Heading;
