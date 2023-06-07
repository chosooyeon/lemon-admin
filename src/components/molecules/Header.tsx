import { useState } from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const switchToggle = () => {
        setToggle(!toggle)
    }
    return(
        <>
            {/* <button onClick={switchToggle}>토글</button> */}
            <section className='flex justify-between px-3 h-[60px] items-center shadow-lg shadow-slate-100'>
                <section className='flex space-x-2'>
                    <div>메뉴바</div>
                    <div>React Admin</div>
                </section>
                <section>
                    <Link to={'/'}>로그인</Link>
                </section>
            </section>
        </>
    )
}

export default Header