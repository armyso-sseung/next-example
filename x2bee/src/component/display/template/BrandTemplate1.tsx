import {ShopType} from "../../../../model/DisplayType";
import style from "./brandTemplate.module.css"


const BrandTemplate1 = ({ brandInfo, template, cornerList } : ShopType) => {
    return (
        <div>
            <div className={ style.brandTemplateTitle }>
                <span>{ template?.tmplNm }</span>
            </div>
        </div>
    )
}


export default BrandTemplate1