"use client"


import {useEffect} from "react";
import {useRouter} from "next/navigation";


export default function MovieDetailPage() {
    const router = useRouter()
    useEffect(() => {
        router.push("/")
    }, [])

    return null
}