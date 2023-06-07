import { useState } from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const switchToggle = () => {
        setToggle(!toggle)
    }
    const menu = [{'id':'menu', 'name':'메뉴관리'},
                  {'id':'user', 'name':'유저관리'},
                  {'id':'app', 'name':'앱관리'},]
    return(
        <>
            {/* <button onClick={switchToggle}>토글</button> */}
            <section className='flex justify-between px-3 bg-slate-100'>
                <section className='flex space-x-2'>
                {menu.map((item,idx)=>(
                    <Link to={item.id} className="text-3xl font-bold underline" key={idx}>{item.name}</Link>
                ))}
                </section>
                <section>
                    <Link to={'/'}>로그인</Link>
                </section>
            </section>
        </>
    )
}

export default Header