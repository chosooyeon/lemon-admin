import { useState } from 'react'

const Header = () => {
    const [toggle, setToggle] = useState(false)
    const switchToggle = () => {
        setToggle(!toggle)
    }
    const menu = ['메뉴관리','유저관리','앱관리']
    return(
        <>
            <button onClick={switchToggle}>토글</button>
            {menu.map((item,idx)=>(
                <div className="text-3xl font-bold underline" key={idx}>{item}</div>
            ))}
        </>
    )
}

export default Header