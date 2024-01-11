import {LayoutType} from "../../../../../model/CommonType";
import style from "./layout.module.css";


const Layout = ({ children } :LayoutType) => {
    return (
        <div className={ style.slideMenu }>
            {children}
        </div>
    )
}


export default Layout