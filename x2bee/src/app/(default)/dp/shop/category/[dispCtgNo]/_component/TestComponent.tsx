"use client"


import {useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import {getCategoryShop} from "@/apis/display/categoryApi";
import dynamic, {LoaderComponent} from "next/dynamic";


const TestComponent = ({ dispCtgNo } :any) => {
    console.log(dispCtgNo)
    const { data, isSuccess } = useQuery<any>({
        queryKey: ['display', 'shop', 'category', dispCtgNo],
        queryFn: () => getCategoryShop( dispCtgNo ),
    })

    if ( isSuccess ) {
        const Template = dynamic(() => import(`@/component/display/template/${ data?.template?.tmplFileNm }`), {
                loading: () => <p>Loading</p>
            })

        return (
            <Template />
        )
    }


    return (
        <>
            Loading...
        </>
    )
}


export default TestComponent