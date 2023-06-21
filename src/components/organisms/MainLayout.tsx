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
        <main className='ml-[230px] h-[calc(100vh-120px)] bg-slate-100 w-[100%]'>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MainLayout;