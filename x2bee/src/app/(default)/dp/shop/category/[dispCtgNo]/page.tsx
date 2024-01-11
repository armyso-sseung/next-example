"use client"


import {useQuery} from "@tanstack/react-query";
import {getCategoryShop} from "@/apis/display/categoryApi";
import DisplayTemplate from "@/component/display/template/DisplayTemplate";


interface PropsType {
    params :{ dispCtgNo :string }
}


const CategoryPage = ({ params } :PropsType) => {
    const { dispCtgNo } = params
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['display', 'shop', 'category', dispCtgNo],
        queryFn: () => getCategoryShop( dispCtgNo ),
        staleTime: 3600 * 1000,
        gcTime: 4000 * 1000
    })

    if ( isLoading ) {
        return null
    }

    return (
        <>
            <DisplayTemplate
                tmplFileNm={data?.template.tmplFileNm}
                shopInfo={data?.shopInfo}
                categoryInfo={data?.categoryInfo}
                template={data?.template || {}}
                cornerList={data?.cornerList}
            />
        </>
    )
}


export default CategoryPage