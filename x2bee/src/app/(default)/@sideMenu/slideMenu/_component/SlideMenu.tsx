"use client"


import style from "./slideMenu.module.css"
import {usePathname, useRouter, useSelectedLayoutSegment} from "next/navigation";
import Link from "next/link";
import {useEffect} from "react";


const SlideMenu = () => {
    const router = useRouter()
    const pathName = usePathname()


    useEffect(() => {
        const slideMenu = document.getElementById("slideMenu") as HTMLElement
        slideMenu.style.zIndex = pathName.includes("/slideMenu") ? "1" : "-1"
    }, [ pathName ]);


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
                <Link href={"/dp/brand"}>메뉴1</Link>
                <li>메뉴2</li>
                <li>메뉴3</li>
            </ul>
        </>
    )
}


export default SlideMenu