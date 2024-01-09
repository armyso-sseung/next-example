"use client"


import style from "./category.module.css"
import {DownOutlined, UpOutlined} from "@ant-design/icons";
import {useCallback, useState} from "react";
import {useRouter} from "next/navigation";


const Category = ({ category } :CategoryComponentType) => {
    const router = useRouter()
    const [ open, setOpen ] = useState<boolean>(false)


    const handleClickCategory = useCallback(() => {
        if ( category.leafYn.includes("N") ) {
            const ctgDom = document.getElementById( `${ category.dispCtgNo }_child`) as HTMLElement
            ctgDom.style.display = ctgDom.style.display === "block" ? "none" : "block"
            setOpen(!open)
        }
    }, [ open ])


    const moveToCategory = () => {
        router.push(`/dp/shop/category/${ category.dispCtgNo }`)
    }



    if (category?.subCategoryList && category.leafYn.includes("N")) {
        return (
            <>
                <div className={ style.categoryTtile } onClick={ handleClickCategory }>
                    <span>{ category.dispCtgNm }</span>
                    <span className={ style.openBtn }>{ open ? <UpOutlined /> : <DownOutlined /> }</span>
                </div>
                <ul id={ `${ category.dispCtgNo }_child` } className={ style.subWrap }>
                    { category.subCategoryList?.map((ctg) => (
                        <li key={ ctg.dispCtgNo } className={ style.subCategory }>
                            <Category category={ ctg } />
                        </li>
                    )) }
                </ul>
            </>
        )
    }

    else {
        return (
            <>
                <div className={ style.categoryTtile } onClick={ moveToCategory }>
                    <span>{ category.dispCtgNm }</span>
                </div>
            </>
        )
    }
}


export default Category