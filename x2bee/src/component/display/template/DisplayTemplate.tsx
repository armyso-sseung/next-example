"use client"


import {BrandShopType, CategoryShopType} from "../../../../model/DisplayType";
import dynamic from "next/dynamic";
import BaseLoading from "@/app/(default)/_component/BaseLoading";
import {useRouter} from "next/navigation";


const DisplayTemplate = ({ tmplFileNm, shopInfo, categoryInfo, brandInfo, template, cornerList  } :CategoryShopType | BrandShopType) => {
    const router = useRouter()
    const Template = dynamic(() => import(`@/component/display/template/${ tmplFileNm }`),
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