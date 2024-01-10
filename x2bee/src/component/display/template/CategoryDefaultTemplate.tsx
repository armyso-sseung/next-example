import {CategoryShopType} from "../../../../model/DisplayType";
import style from "@/component/display/template/dispCategoryTemplate1.module.css";


const CategoryDefaultTemplate = ({ categoryInfo, template } :CategoryShopType) => {
    return (
        <div>
            <div className={ style.categoryTemplateTitle }>
                <span>{ template.tmplNm || "기본 템플릿" }</span>
            </div>
        </div>
    )
}


export default CategoryDefaultTemplate