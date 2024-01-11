import style from "./slideMenu.module.css"
import SideMenuHeader from "@/app/(default)/@sideMenu/sideMenu/_component/SideMenuHeader";
import Shopping from "@/app/(default)/@sideMenu/sideMenu/_component/Shopping";


const SlideMenu = () => {
    return (
        <>
            <SideMenuHeader />
            <ul className={ style.menuWrap }>
                <Shopping />
            </ul>
        </>
    )
}


export default SlideMenu