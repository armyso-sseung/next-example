import {CategoryShopType} from "../../../../model/DisplayType";
import style from "./categoryTemplate.module.css";


const DispCategoryTemplate2 = ({ categoryInfo, template, cornerList } :CategoryShopType) => {
    return (
        <div>
            <div className={ style.categoryTemplateTitle }>
                <span>{ template.tmplNm }</span>
            </div>
        </div>
    )
}


export default DispCategoryTemplate2