
import { Link } from "react-router-dom";
const LeftBar = () => {
    const menu = [{'id':'menu', 'name':'메뉴관리'},
                    {'id':'user', 'name':'유저관리'},
                    {'id':'app', 'name':'앱관리'},]

    return(
        <>
            <section className='w-[120px] fixed h-[100%] bg-[rgba(41,133,219,.1)]'>
                <ul className="space-y-2 ml-3 mt-3">
                {menu.map((item,idx)=>(
                    <li key={idx}><Link to={item.id} className="" key={idx}>{item.name}</Link></li>
                ))}
                </ul>
            </section>
        </>
    )
}

export default LeftBar