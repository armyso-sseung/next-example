import {CategoryShopType} from "../../../../model/DisplayType";
import style from "./dispCategoryTemplate1.module.css"


const DispCategoryTemplate1 = ({ categoryInfo, template, cornerList } :CategoryShopType) => {
    return (
        <div>
            <div className={ style.categoryTemplateTitle }>
                <span>{ template.tmplNm }</span>
            </div>
        </div>
    )
}


export default DispCategoryTemplate1