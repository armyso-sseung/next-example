import Link from "next/link";
import style from "./page.module.css"


export default function Index() {
    return (
        <>
            <Link href={'/movie'} className={ style.movieBtn }>영화 목록</Link>
        </>
    )
}