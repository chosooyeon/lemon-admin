import Header from '../molecules/Header'
import LeftBar from '../molecules/LeftBar'
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { sideBar } from '../../recoil';

const MainLayout = () => {
  const isToggle = useRecoilValue(sideBar);

  return (
    <>
      <div className='fixed bg-white z-50 w-[100%]'>
        <Header />
      </div>
      <div className={isToggle ? '-translate-x-[120px] duration-300 ease-in-out pt-[60px]' : 'duration-300 ease-in-out pt-[60px]'}>
        <LeftBar />
        <div className='ml-[130px]'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;