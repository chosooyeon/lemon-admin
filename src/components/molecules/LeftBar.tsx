
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const LeftBar = () => {
    const location = useLocation();
    const [loc, setLoc] = useState('')
    const menu = [
                    {'icon':'', 'id':'stats', 'name':'통계관리'},
                    {'icon':'', 'id':'menu', 'name':'메뉴관리'},
                    {'icon':'', 'id':'user', 'name':'사용자관리'},
                    {'icon':'', 'id':'app', 'name':'앱관리'},
                 ]

    useEffect(() => {
        setLoc(location.pathname)
    },[ location ])
    
    return(
        <>
            <section className='overflow-auto w-[230px] fixed h-[calc(100%-60px)] bg-[#ffffff] text-[rgba(56,56,56,0.7)] border-r-[1px]'>
                <ul className="space-y-3 ml-6 mt-6">
                {menu.map((item,idx)=>(
                    <li key={idx}>
                        <Link to={item.id}
                            className={loc.indexOf(item.id)!=-1 ? 'text-[#5d78ff]' : 'text-[rgba(56,56,56,0.7)]'}
                            key={idx}>{item.name}
                        </Link>
                    </li>
                ))}
                </ul>
            </section>
        </>
    )
}

export default LeftBar