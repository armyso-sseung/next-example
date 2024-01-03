"use client"


import style from "./slideMenu.module.css"


const SlideMenu = () => {
    const handleClickCloseBtn = () => {
        // @ts-ignore
        document.getElementById("slideMenu").style.left = '-100%'
    }



    return (
        <>
            <div className={ style.closeButton } onClick={handleClickCloseBtn}>
                닫기
            </div>
            <ul>
                <li>메뉴1</li>
                <li>메뉴2</li>
                <li>메뉴3</li>
            </ul>
        </>
    )
}


export default SlideMenu