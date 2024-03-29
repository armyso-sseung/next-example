import {ShopType} from "../../../../model/DisplayType";
import style from "./brandTemplate.module.css"


const BrandTemplate2 = ({ brandInfo, template, cornerList } :ShopType) => {
    return (
        <div>
            <div className={ style.brandTemplateTitle }>
                <span>{ template?.tmplNm }</span>
            </div>
        </div>
    )
}


export default BrandTemplate2