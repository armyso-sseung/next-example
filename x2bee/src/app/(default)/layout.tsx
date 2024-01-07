import {LayoutType} from "../../../model/CommonType";
import style from "./layout.module.css"
import NavMenu from "@/app/(default)/_component/NavMenu";
import {ReactNode} from "react";


interface PropsType extends LayoutType {
    sideMenu :ReactNode
}


const DPLayout = ({ children, sideMenu } :PropsType) => {
    return (
        <main className={ style.container }>
            <div id={"slideMenu"} className={ style.sideMenu }>
                { sideMenu }
            </div>

            <div className={ style.content }>
                { children }
            </div>

            <div className={ style.nav }>
                <NavMenu />
            </div>
        </main>
    )
}


export default DPLayout