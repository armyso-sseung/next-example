import {LayoutType} from "../../../model/CommonType";
import style from "./layout.module.css"
import SlideMenu from "@/app/(display)/_component/SlideMenu";
import NavMenu from "@/app/(display)/_component/NavMenu";


const DPLayout = ({ children } :LayoutType) => {
    return (
        <main className={ style.container }>
            { children }
            <div id={"navMenu"} className={ style.nav }>
                <NavMenu />
            </div>

            <div id={"slideMenu"} className={ style.slideMenu }>
                <SlideMenu />
            </div>
        </main>
    )
}


export default DPLayout