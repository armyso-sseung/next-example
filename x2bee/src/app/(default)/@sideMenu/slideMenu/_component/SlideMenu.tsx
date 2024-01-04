"use client"


import style from "./slideMenu.module.css"
import {useRouter} from "next/navigation";


const SlideMenu = () => {
    const router = useRouter()
    const handleClickCloseBtn = () => {
        router.back()
    }


    return (
        <>
            <div className={ style.header }>
                <div className={ style.home }>
                    홈
                </div>
                <div className={ style.closeButton } onClick={handleClickCloseBtn}>
                    닫기
                </div>
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