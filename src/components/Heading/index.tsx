import SearchInput from '../SearchInput';

import cl from './Heading.module.scss';

const Heading = () => {
  return (
    <div className={cl.heading}>
      <h1>Vinnytsia</h1>
      <SearchInput />
    </div>
  );
};

export default Heading;
