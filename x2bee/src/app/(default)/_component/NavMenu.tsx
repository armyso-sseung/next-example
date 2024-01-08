import style from "./navMenu.module.css";
import Link from "next/link";


const NavMenu = () => {
    return (
        <>
            <Link className={ style.menu } href={'/sideMenu'}>
                메뉴
            </Link>
            <Link className={ style.home } href={'/'}>
                홈
            </Link>
            <div className={ style.mypage }>
                마이페이지
            </div>
        </>
    )
}


export default NavMenu