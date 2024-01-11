import style from "./brand.module.css"
import {RightOutlined} from "@ant-design/icons";
import Link from "next/link";


const Brand = ({ brand } :BrandComponentType) => {
    return (
        <>
            <Link href={`/dp/shop/brand/${ brand.brandNo }`} className={ style.brandTtile }>
                <span>{ brand.dispShopNm }</span>
                <span className={ style.dispBrandRoute }><RightOutlined /></span>
            </Link>
        </>
    )
}


export default Brand