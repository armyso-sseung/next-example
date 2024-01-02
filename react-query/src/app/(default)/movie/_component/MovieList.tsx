"use client"


import {useQuery} from "@tanstack/react-query";
import getMovieList from "@/app/(default)/movie/_lib/getMovieList";
import {Movie} from "@/models/Movie";
import {faker} from "@faker-js/faker";
import style from "./movieList.module.css"


export default function MovieList() {
    const { data } = useQuery<Movie[]>({
        queryKey: ['movie', 'list'],
        queryFn: getMovieList,

        staleTime: 60 * 1000, // 캐시 유지 타임 / 기본값 0 이며 fresh -> stale / 60 * 1000 = 1분
        // staleTime: Infinity // 항상 fresh 상태 값을 가져오지 않는다
        // gcTime: 300 * 1000 // 삭제 타임 / 기본값 5분 inactve 에서 5분이 지나면 삭제 / staleTime 이 gcTime 보다 무조건 작아야 한다.
        initialData: () => [] // 초기 데이터
    })


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
            { data?.map((movie, idx) => (
                <div key={ idx } className={ style.movieWrap }>
                    <div className={ style.movieImg }>
                        <img src={ faker.image.avatar() || '' } />
                    </div>
                    <div className={ style.movieContent }>
                        <p>영화 제목 : { movie.movieNm }</p>
                        <p>개봉일 : { movie.openDt }</p>
                    </div>
                </div>
            ))}
        </>
    )
}