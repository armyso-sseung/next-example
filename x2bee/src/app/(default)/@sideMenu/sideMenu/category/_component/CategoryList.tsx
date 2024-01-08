"use client"


import {useQuery} from "@tanstack/react-query";
import {getSideMenuCategory} from "@/apis/common/sideMenuApi";
import Category from "@/app/(default)/@sideMenu/sideMenu/category/_component/Category";
import style from "./categoryList.module.css"


const CategoryList = () => {
    const { data } = useQuery<DisplayCategoryType[], Object, DisplayCategoryType[], [_1 :string, _2 :string]>({
        queryKey: ['sideMenu', 'category'],
        queryFn: getSideMenuCategory,
        staleTime: 3600 * 1000,
        gcTime: 4000 * 1000
    })


    return (
        <div className={ style.container }>
            <ul className={ style.ctgWrap }>
                {data?.map((ctg) => (
                    <li key={ ctg.dispCtgNo } className={ style.ctgList }>
                        <Category category={ ctg } />
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default CategoryList