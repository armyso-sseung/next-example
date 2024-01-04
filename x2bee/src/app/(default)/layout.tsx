import {LayoutType} from "../../../model/CommonType";
import style from "./layout.module.css"
import SlideMenu from "@/app/(default)/@sideMenu/slideMenu/_component/SlideMenu";
import NavMenu from "@/app/(default)/_component/NavMenu";
import {ReactNode} from "react";


interface PropsType extends LayoutType {
    sideMenu :ReactNode
}


const DPLayout = ({ children, sideMenu } :PropsType) => {
    return (
        <main className={ style.container }>
            { sideMenu }
            { children }
            <div id={"navMenu"} className={ style.nav }>
                <NavMenu />
            </div>
        </main>
    )
}


export default DPLayout