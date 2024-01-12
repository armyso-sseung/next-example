import {ShopType} from "../../../../model/DisplayType";
import style from "./categoryTemplate.module.css"
import {FC, ReactNode} from "react";


const DispCategoryTemplate1 = ({ categoryInfo, template, cornerList } : ShopType) => {
    return (
        <div>
            <div className={ style.categoryTemplateTitle }>
                <span>{ template?.tmplNm }</span>
            </div>
        </div>
    )
}


export default DispCategoryTemplate1