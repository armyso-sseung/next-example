"use client"


import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {DetailPageType} from "@/models/Movie";
import BaseLoading from "@/app/(default)/_component/BaseLoading";
import getMovie from "@/app/(default)/@modal/(.)movie/[id]/_lib/getMovie";
import {faker} from "@faker-js/faker";
import style from "./detail.module.css"
import deleteMovie from "@/app/(default)/@modal/(.)movie/[id]/_lib/deleteMovie";
import {useRouter} from "next/navigation";


export default function Detail({ id } :DetailPageType) {
    const router = useRouter()
    const queryClient = useQueryClient()

    const { data: movie, isLoading } = useQuery<any>({
        queryKey: ['movie', 'detail', id],
        queryFn: getMovie,
        staleTime: 300 * 1000,
        gcTime: 600 * 1000,
    })

    const deleteMutaion = useMutation({
        mutationFn: (movieId) => deleteMovie(movieId!),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['movie', 'list'] })
            router.back()
        }
    })


    if ( isLoading ) {
        return <BaseLoading />
    }

    return (
        <div className={ style.container }>
            <div className={ style.movieImg }>
                <img src={ faker.image.urlLoremFlickr() } alt=""/>
            </div>
            <div className={ style.movieContentWrap }>
                <div className={ style.movieContent }>
                    <div className={ style.movieTitle }>
                        <h2>영화 제목</h2>
                        <p>{ movie.movieNm }</p>
                    </div>

                    <div className={ style.movieOpenDt }>
                        <h4>개봉일</h4>
                        <p>{ movie.openDt }</p>
                    </div>
                </div>
                <div className={ style.movieDelete } onClick={() => deleteMutaion.mutate( movie.id )}>
                    삭제
                </div>
            </div>
        </div>
    )
}