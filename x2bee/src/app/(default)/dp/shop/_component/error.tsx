"use client"


import {useEffect} from "react";

type PropsType = {
    error :Error & { digest?: string },
    reset :() => void
}


const Error = ({ error, reset } :PropsType) => {
    useEffect(() => {
        alert( error )
    }, [ error ])

    return (
        <>
            ss
        </>
    )
}


export default Error