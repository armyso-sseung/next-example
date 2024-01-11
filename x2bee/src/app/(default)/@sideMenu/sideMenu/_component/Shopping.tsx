"use client"


import style from "./shopping.module.css";
import {RightOutlined} from "@ant-design/icons";
import {useRouter} from "next/navigation";


const Shopping = () => {
    const router = useRouter()


    const handleClickCategory = () => {
        router.replace("/sideMenu/category")
    }

    const handleClickBrand = () => {
        router.replace("/sideMenu/brand")
    }


    return (
        <>
            <p className={ style.shoppingTitle }>쇼핑</p>
            <div className={ style.categoryBtn } onClick={ handleClickCategory } >
                카테고리
                <span className={ style.moveBtn }><RightOutlined /></span>
            </div>
            <div className={ style.brandBtn } onClick={ handleClickBrand } >
                브랜드
                <span className={ style.moveBtn }><RightOutlined /></span>
            </div>
        </>
    )
}


export default Shopping