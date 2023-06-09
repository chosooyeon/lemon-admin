import Header from '@/components/molecules/Header'
import LeftBar from '@/components/molecules/LeftBar'
import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { sideBar } from '@/recoil';

const MainLayout = () => {
  const isToggle = useRecoilValue(sideBar);

  return (
    <>
      <div className='fixed bg-white z-50 w-[100%]'>
        <Header />
      </div>
      <div className={isToggle ? '-translate-x-[230px] duration-300 ease-in-out pt-[60px]' : 'duration-300 ease-in-out pt-[60px]'}>
        <LeftBar />
        <div className='ml-[256px] mt-6  h-[calc(100vh-120px)]'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;