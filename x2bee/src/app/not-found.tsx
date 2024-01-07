"use client"


import {usePathname, useRouter, useSelectedLayoutSegment, useSelectedLayoutSegments} from "next/navigation";
import {useEffect} from "react";

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        router.push('/')
    }, []);

    return null
}


export default NotFound