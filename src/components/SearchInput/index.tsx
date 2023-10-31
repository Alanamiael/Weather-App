import cl from './SearchInput.module.scss';
import searchIcon from '/icons/searchIcon.svg';

const SearchInput = () => {
  return (
    <div className="searchInputWrapper">
      <button type="button" className={cl.searchButton}>
        <img src={searchIcon} alt="search" className={cl.searchIcon} />
      </button>
      <input className={cl.myInput} placeholder="Search the city" />
    </div>
  );
};

export default SearchInput;
