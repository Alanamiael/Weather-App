import MainTableBanner from '../MainTableBanner/index';
import BigTable from '../BigTable';
import cl from './MainTable.module.scss';

const MainTable = () => {
  return (
    <div className={cl.flex}>
      <MainTableBanner />
      <BigTable />.
    </div>
  );
};

export default MainTable;
