import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {Movie, MovieDetailType} from "@/models/Movie";
import style from "./page.module.css"
import getMovie from "@/app/(default)/@modal/(.)movie/[id]/_lib/getMovie";
import Detail from "@/app/(default)/@modal/(.)movie/[id]/_component/Detail";
import BackButton from "@/app/_component/BackButton";


export default async function MovieDetailPage({ params } :MovieDetailType ) {
    const { id } = params
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['movie', 'detail', id],
        queryFn: getMovie,
    })

    const dehydrateState = dehydrate( queryClient )


    return (
        <div className={ style.container }>
            <HydrationBoundary state={ dehydrateState }>
                <div className={ style.modal }>
                    <div className={ style.backBtn }>
                        <BackButton />
                    </div>
                    <Detail id={id} />
                </div>
            </HydrationBoundary>
        </div>
    )
}