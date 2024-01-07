import style from "./page.module.css"
import SlideMenu from "@/app/(default)/@sideMenu/slideMenu/_component/SlideMenu";


const SideMenuPage = () => {
    return (
        <div className={ style.slideMenu }>
            <SlideMenu />
        </div>
    )
}


export default SideMenuPage