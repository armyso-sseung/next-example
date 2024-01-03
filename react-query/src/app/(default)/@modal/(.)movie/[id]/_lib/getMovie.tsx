import {QueryFunction} from "@tanstack/query-core";
import {Movie} from "@/models/Movie";

export default async function getMovie ({ queryKey } :any) {
    const [ _1, _2, id ] = queryKey
    const res = await fetch(`http://localhost:9090/movieList/${ id }`, {
        next: {
            tags: ['movie', 'detail', id]
        },
        cache: 'no-store'
    })

    if ( !res ) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}