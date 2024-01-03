"use client"


import style from "./navMenu.module.css";


const NavMenu = () => {
    const handleClickMenu = () => {
        // @ts-ignore
        document.getElementById("slideMenu").style.left = 0
    }


    return (
        <>
            <div className={ style.menu } onClick={handleClickMenu}>
                메뉴
            </div>
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