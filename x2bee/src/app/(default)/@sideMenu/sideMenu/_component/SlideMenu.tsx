import style from "./slideMenu.module.css"
import SideMenuHeader from "@/app/(default)/@sideMenu/sideMenu/_component/SideMenuHeader";
import Link from "next/link";
import {RightOutlined} from "@ant-design/icons";


const SlideMenu = () => {
    return (
        <>
            <SideMenuHeader />
            <ul className={ style.menuWrap }>
                <p>쇼핑</p>
                <Link href={"/sideMenu/category"} className={ style.categoryBtn }>
                    카테고리
                    <span className={ style.moveBtn }><RightOutlined /></span>
                </Link>
                <Link href={"/sideMenu/brand"} className={ style.brandBtn }>
                    브랜드
                    <span className={ style.moveBtn }><RightOutlined /></span>
                </Link>
            </ul>
        </>
    )
}


export default SlideMenu