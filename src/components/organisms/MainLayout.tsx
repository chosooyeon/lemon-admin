import Header from '../molecules/Header'
import LeftBar from '../molecules/LeftBar'
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <>
      <div className='fixed bg-white z-50 w-[100%]'>
        <Header />
      </div>
      <div className='pt-[60px]'>
        <LeftBar />
        <div className='ml-[130px]'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;