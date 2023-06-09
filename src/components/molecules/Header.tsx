import hamburger from '@/assets/hamburger.png';
import { useSetRecoilState } from 'recoil';
import { sideBar } from '@/recoil';

const Header = () => {
    const setToggleAtom = useSetRecoilState(sideBar);
    const toggle = () => setToggleAtom((prev) => !prev);

    return(
        <>
            <section className='flex justify-between px-6 h-[60px] items-center shadow-lg shadow-slate-100'>
                <section className='flex space-x-2 items-center'>
                    <img width={30} src={hamburger} onClick={toggle}/>
                    <div>React Admin</div>
                </section>
                <section>
                    <div>로그아웃</div>
                </section>
            </section>
        </>
    )
}

export default Header