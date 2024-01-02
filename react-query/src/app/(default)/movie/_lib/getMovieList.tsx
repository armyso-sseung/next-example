import {revalidatePath, revalidateTag} from "next/cache";

export default async function getMovieList() {
    const res = await fetch('http://localhost:9090/movieList', {
        next: {
            tags: ['movie', 'list']
        },
        cache: 'no-store' // Next 캐싱을 하지 않겠다
    })

    if ( !res ) {
        throw new Error('Failed to fetch data')
    }

    // revalidateTag('movie') // 캐시 초기화
    // revalidatePath('/home') // 홈페이지에 관련된 api를 새로고침 한다.
    return res.json()
}