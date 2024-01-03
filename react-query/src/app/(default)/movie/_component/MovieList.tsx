"use client"


import {InfiniteData, useInfiniteQuery} from "@tanstack/react-query";
import getMovieList from "@/app/(default)/movie/_lib/getMovieList";
import {Movie} from "@/models/Movie";
import style from "./movieList.module.css"
import BaseLoading from "@/app/(default)/_component/BaseLoading";
import {Fragment, useEffect} from "react";
import {useInView} from "react-intersection-observer";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {faker} from "@faker-js/faker";


export default function MovieList() {
    const {
        data,
        isLoading,
        isError,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching, // 쿼리를 가져오고 있는지
    } = useInfiniteQuery<Movie[], Object, InfiniteData<Movie[]>, [_1 :string, _2 :string], number>({
        queryKey: ['movie', 'list'],
        queryFn: getMovieList,
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => lastPage.length > 0 ? allPages.length + 1 : undefined,
        staleTime: 60 * 1000, // 캐시 유지 타임 / 기본값 0 이며 fresh -> stale / 60 * 1000 = 1분
        // staleTime: Infinity // 항상 fresh 상태 값을 가져오지 않는다
        // gcTime: 300 * 1000 // 삭제 타임 / 기본값 5분 inactve 에서 5분이 지나면 삭제 / staleTime 이 gcTime 보다 무조건 작아야 한다.
        // initialData: () => [], // 초기 데이터
        // retry: 0 // 조회 실패 시 몇번 진행 할지 카운트
        // enabled: // 실행되는 조건
    })

    const { ref, inView } = useInView({
        threshold: 0, // 하단 태그가 보이고 얼마의 픽셀이 보이고 나서 될건지 0이면 즉시,
        delay: 0, // 태그가 보이고 얼마 후에 실행할건지
    })

    useEffect(() => {
        if ( inView ) {
            !isFetching && hasNextPage && fetchNextPage()
        }
    }, [ isFetching, hasNextPage, fetchNextPage, inView ])



    if ( isLoading ) {
        return <BaseLoading />
    }

    /*
        ReactDevTools
        Refetch => 데이터를 다시 불러옴 ( 무조건 )
        Invalidate => 데이터를 폐기 후 다시 불러옴 ( Observers 있을 때 가져오고 아닌 경우는 Observers 생길 때 가져온다 ( 데이터를 쓰고 있을 떄 가져온다 ) )
        Reset => 초기 데이터가 있을 경우 초기 데이터를 가져오고 초기 데이터가 없는 경우 Api 호출하여 새로 가져온다 ( 초기 데이터 == initialData )
        Remove => 캐시된 데이터를 지우기
        Trigger Loading => 로딩 상태 확인 / Restore Loading => 원복
        Trigger Error => 에러 상태 확인 / Restore Error => 원복
    */


    return (
        <>
            <div className={ style.container }>
                <>
                    { data?.pages.map((page, idx) => (
                        <Fragment key={ idx }>
                            { page.map(( movie) => (
                                <Link href={`/movie/${ movie.id }`} key={ movie.id } className={ style.movieWrap } >
                                    <div className={ style.movieNum }>
                                        <h4>{ movie.id }</h4>
                                    </div>
                                    <div className={ style.movieImg }>
                                        <img src={ faker.image.avatar() || '' } alt={""} />
                                    </div>
                                    <div className={ style.movieContent }>
                                        <p>영화 제목 : { movie.movieNm }</p>
                                        <p>개봉일 : { movie.openDt }</p>
                                    </div>
                                </Link>
                            ))}
                        </Fragment>
                    ))}
                    <div ref={ref} style={{ height: 5 }} />
                </>
            </div>
        </>
    )
}