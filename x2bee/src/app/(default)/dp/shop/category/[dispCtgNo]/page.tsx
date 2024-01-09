import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getCategoryShop} from "@/apis/display/categoryApi";
import TestComponent from "@/app/(default)/dp/shop/category/[dispCtgNo]/_component/TestComponent";

interface PropsType {
    params :{ dispCtgNo :string }
}


const CategoryPage = ({ params } :PropsType) => {
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
                <TestComponent dispCtgNo={dispCtgNo} />
            </HydrationBoundary>
        </>
    )
}


export default CategoryPage