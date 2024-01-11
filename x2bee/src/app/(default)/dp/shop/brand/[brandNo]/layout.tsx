import {ReactNode} from "react";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getBrandShop} from "@/apis/display/brandApi";


interface PropsType {
    params :{ brandNo :string }
    children :ReactNode
}


const BrandLayout = ({ params, children } :PropsType) => {
    const { brandNo } = params

    const queryClient = new QueryClient()
    queryClient.prefetchQuery({
        queryKey: ['display', 'shop', 'brand', brandNo],
        queryFn: getBrandShop,
    })

    const dehydrateState = dehydrate(queryClient)


    return (
        <>
            <HydrationBoundary state={ dehydrateState }>
                { children }
            </HydrationBoundary>
        </>
    )
}


export default BrandLayout