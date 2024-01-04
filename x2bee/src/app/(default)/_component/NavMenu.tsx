import style from "./navMenu.module.css";
import Link from "next/link";


const NavMenu = () => {
    return (
        <>
            <Link className={ style.menu } href={'/slideMenu'}>
                메뉴
            </Link>
            <div className={ style.home }>
                홈
            </div>
            <div className={ style.mypage }>
                마이페이지
            </div>
        </>
    )
}


export default NavMenu