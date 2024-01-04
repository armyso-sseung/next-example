import SlideMenu from "@/app/(default)/@sideMenu/slideMenu/_component/SlideMenu";
import style from "./page.module.css"


const SideMenuPage = () => {
    return (
        <div id={"slideMenu"} className={ style.slideMenu }>
            <SlideMenu />
        </div>
    )
}


export default SideMenuPage