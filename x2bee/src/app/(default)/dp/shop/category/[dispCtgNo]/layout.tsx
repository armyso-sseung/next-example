import {ReactNode} from "react";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {getCategoryShop} from "@/apis/display/categoryApi";
import {HydrationBoundary} from "@tanstack/react-query";


interface PropsType {
    params :{ dispCtgNo :string }
    children :ReactNode
}


const CategoryLayout = ({ params, children } :PropsType) => {
    const { dispCtgNo } = params

    const queryClient = new QueryClient()
    queryClient.prefetchQuery({
        queryKey: ['display', 'shop', 'category', dispCtgNo],
        queryFn: () => getCategoryShop( dispCtgNo ),
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


export default CategoryLayout