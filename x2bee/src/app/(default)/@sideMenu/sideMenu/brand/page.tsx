import SideMenuHeader from "@/app/(default)/@sideMenu/sideMenu/_component/SideMenuHeader";
import style from "./page.module.css"
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getSideMenuBrand} from "@/apis/common/sideMenuApi";
import BrandList from "@/app/(default)/@sideMenu/sideMenu/brand/_component/BrandList";


const BrandPage = () => {
    const queryClient = new QueryClient()
    queryClient.prefetchQuery({
        queryKey: ['sideMenu', 'brand'],
        queryFn: getSideMenuBrand,
    })

    const dehydrateState = dehydrate( queryClient )


    return (
        <>
            <SideMenuHeader title={ "브랜드" } />
            <div className={ style.content }>
                <HydrationBoundary state={ dehydrateState }>
                    <BrandList />
                </HydrationBoundary>
            </div>
        </>
    )
}


export default BrandPage