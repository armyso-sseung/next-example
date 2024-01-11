"use client"


import {SideMenuHeaderType} from "../../../../../../model/SideMenuType";
import style from "./sideMenuHeader.module.css";
import {useRouter} from "next/navigation";
import {CloseOutlined, HomeOutlined, LeftOutlined} from "@ant-design/icons";


const SideMenuHeader = ({ title } :SideMenuHeaderType) => {
    const router = useRouter()


    const handleClickBackBtn = () => {
        router.replace("/sideMenu")
    }

    const handleClickCloseBtn = () => {
        router.back()
    }


    if ( title ) {
        return (
            <>
                <div className={ style.header }>
                    <div className={ style.home } onClick={ handleClickBackBtn }>
                        <LeftOutlined />
                    </div>
                    <div className={ style.title }>
                        { title }
                    </div>
                    <div className={ style.closeButton } onClick={ handleClickCloseBtn }>
                        <CloseOutlined />
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={ style.header }>
                    <div className={ style.home } onClick={ handleClickBackBtn }>
                        <HomeOutlined />
                    </div>
                    <div className={ style.closeButton } onClick={ handleClickCloseBtn }>
                        <CloseOutlined />
                    </div>
                </div>
            </>
        )
    }
}


export default SideMenuHeader