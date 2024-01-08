import {LayoutType} from "../../../../../model/CommonType";
import style from "./layout.module.css";
import SideMenuInit from "@/app/(default)/@sideMenu/sideMenu/_component/SideMenuInit";


const Layout = ({ children } :LayoutType) => {
    return (
        <div className={ style.slideMenu }>
            <SideMenuInit />
            {children}
        </div>
    )
}


export default Layout