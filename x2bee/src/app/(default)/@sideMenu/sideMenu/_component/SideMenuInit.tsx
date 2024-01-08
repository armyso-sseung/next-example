"use client"


import {usePathname} from "next/navigation";
import {useEffect} from "react";


const SideMenuInit = () => {
    const pathName = usePathname()


    useEffect(() => {
        const slideMenu = document.getElementById("sideMenu") as HTMLElement
        slideMenu.style.zIndex = pathName.includes("/sideMenu") ? "1" : "-1"
    }, [ pathName ]);


    return null
}


export default SideMenuInit