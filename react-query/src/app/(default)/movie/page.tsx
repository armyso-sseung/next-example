import style from "./page.module.css"
import BackButton from "@/app/_component/BackButton";
import {dehydrate, QueryClient} from "@tanstack/react-query";
import {HydrationBoundary} from "@tanstack/react-query";
import getMovieList from "@/app/(default)/movie/_lib/getMovieList";
import MovieList from "@/app/(default)/movie/_component/MovieList";


export default async function MoviePage() {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery({
        queryKey: ['movie', 'list'],
        queryFn: getMovieList
    })

    const dehydratedState = dehydrate( queryClient )
    // queryClient.getQueryData(['movie', 'list '])

    return (
        <main className={ style.container }>
            <div className={ style.movieWrap }>
                <BackButton />
                <HydrationBoundary state={ dehydratedState }>
                    <MovieList />
                </HydrationBoundary>
            </div>
        </main>
    )
}