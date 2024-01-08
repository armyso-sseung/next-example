import SlideMenu from "@/app/(default)/@sideMenu/sideMenu/_component/SlideMenu";
import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {getSideMenuCategory} from "@/apis/common/sideMenuApi";
import style from "./page.module.css"


const SideMenuPage = () => {
    const queryClient = new QueryClient()
    queryClient.prefetchQuery({
        queryKey: ['sideMenu', 'category'],
        queryFn: getSideMenuCategory,
    })

    const dehydrateState = dehydrate(queryClient)


    return (
        <div className={ style.container }>
            <HydrationBoundary state={ dehydrateState }>
                <SlideMenu />
            </HydrationBoundary>
        </div>
    )
}


export default SideMenuPage