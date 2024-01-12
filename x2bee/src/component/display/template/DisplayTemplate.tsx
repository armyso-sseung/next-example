import {ShopType} from "../../../../model/DisplayType";
import dynamic from "next/dynamic";
import BaseLoading from "@/app/(default)/_component/BaseLoading";


const DisplayTemplate = ({ tmplFileNm, shopInfo, categoryInfo, brandInfo, template, cornerList  } :ShopType) => {
    const Template = dynamic<ShopType>(() => import(`@/component/display/template/${ tmplFileNm }`),
    {
                loading: () => <BaseLoading />
            })


    return (
        <Template
            shopInfo={ shopInfo }
            categoryInfo={ categoryInfo }
            brandInfo={ brandInfo }
            template={ template }
            cornerList={ cornerList }
        />
    )
}


export default DisplayTemplate