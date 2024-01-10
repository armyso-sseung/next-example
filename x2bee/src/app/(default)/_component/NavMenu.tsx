import style from "./navMenu.module.css";
import Link from "next/link";
import {HomeOutlined, MenuOutlined, UserOutlined} from "@ant-design/icons";


const NavMenu = () => {
    return (
        <div className={ style.nav }>
            <Link className={ style.menu } href={'/sideMenu'}>
                <MenuOutlined />
            </Link>
            <Link className={ style.home } href={'/'}>
                <HomeOutlined />
            </Link>
            <div className={ style.mypage }>
                <UserOutlined />
            </div>
        </div>
    )
}


export default NavMenu