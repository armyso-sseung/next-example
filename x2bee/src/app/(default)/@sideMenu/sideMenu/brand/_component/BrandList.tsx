"use client"


import style from "./brandList.module.css"
import {useQuery} from "@tanstack/react-query";
import {getSideMenuBrand} from "@/apis/common/sideMenuApi";
import Brand from "@/app/(default)/@sideMenu/sideMenu/brand/_component/Brand";


const BrandList = () => {
    const { data, isSuccess } = useQuery<DisplayBrandType[], Object, DisplayBrandType[], [_1 :string, _2 :string]>({
        queryKey: ['sideMenu', 'brand'],
        queryFn: getSideMenuBrand,
        staleTime: 3600 * 1000,
        gcTime: 4000 * 1000
    })


    return (
        <div className={ style.container } >
            <ul className={ style.brandWrap }>
                {data?.map((brand) => (
                    <li key={ brand.brandNo } className={ style.brandList }>
                        <Brand brand={ brand } />
                    </li>
                ))}
            </ul>
        </div>
    )
}


export default BrandList