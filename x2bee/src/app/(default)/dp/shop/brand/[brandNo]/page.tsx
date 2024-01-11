"use client"


import {useQuery} from "@tanstack/react-query";
import DisplayTemplate from "@/component/display/template/DisplayTemplate";
import {getBrandShop} from "@/apis/display/brandApi";


interface PropsType {
    params :{ brandNo :string }
}


const BrandPage = ({ params } :PropsType) => {
    const { brandNo } = params
    const { data, isLoading, isSuccess, error, isError } = useQuery({
        queryKey: ['display', 'shop', 'brand', brandNo],
        queryFn: getBrandShop,
        staleTime: 3600 * 1000,
        gcTime: 4000 * 1000,
    })

    if ( isLoading ) {
        return null
    }

    if ( isSuccess ) {
        console.log(data)
    }

    if ( error ) {
        console.log(error?.response.data.message)
        return null
    }

    return (
        <>
            <DisplayTemplate
                tmplFileNm={data?.template.tmplFileNm}
                shopInfo={data?.shopInfo}
                brandInfo={data?.brandInfo}
                template={data?.template || {}}
                cornerList={data?.cornerList}
            />
        </>
    )
}


export default BrandPage