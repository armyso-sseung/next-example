import {LayoutType} from "../../../model/CommonType";
import style from "./layout.module.css"
import NavMenu from "@/app/(default)/_component/NavMenu";
import {ReactNode} from "react";
import RQProvider from "@/component/common/RQProvider";


interface PropsType extends LayoutType {
    sideMenu :ReactNode
}


const DPLayout = ({ children, sideMenu } :PropsType) => {
    return (
        <main className={ style.container }>
            <RQProvider>
                <div id={"sideMenu"} className={ style.sideMenu }>
                    { sideMenu }
                </div>

                <div className={ style.content }>
                    { children }
                </div>

                <NavMenu />
            </RQProvider>
        </main>
    )
}


export default DPLayout