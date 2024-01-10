import {CategoryShopType} from "../../../../model/DisplayType";
import dynamic from "next/dynamic";
import BaseLoading from "@/app/(default)/_component/BaseLoading";


const DisplayTemplate = ({ tmplFileNm, shopInfo, categoryInfo, template, cornerList  } :CategoryShopType) => {
    const Template = dynamic(() => import(`@/component/display/template/${ tmplFileNm }`),
        {
            loading: () => <BaseLoading />
        })


    return (
        <Template
            shopInfo={ shopInfo }
            categoryInfo={ categoryInfo }
            template={ template }
            cornerList={ cornerList }
        />
    )
}


export default DisplayTemplate