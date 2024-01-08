import style from "./page.module.css";
import CategoryList from "@/app/(default)/@sideMenu/sideMenu/category/_component/CategoryList";
import SideMenuHeader from "@/app/(default)/@sideMenu/sideMenu/_component/SideMenuHeader";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getSideMenuCategory} from "@/apis/common/sideMenuApi";


const CategoryPage = () => {
    const queryClient = new QueryClient()
    queryClient.prefetchQuery({
        queryKey: ['sideMenu', 'category'],
        queryFn: getSideMenuCategory,
    })

    const dehydrateState = dehydrate( queryClient )


    return (
        <>
            <SideMenuHeader title={ "카테고리" } />
            <div className={ style.content }>
                <HydrationBoundary state={ dehydrateState }>
                    <CategoryList />
                </HydrationBoundary>
            </div>
        </>
    )
}


export default CategoryPage