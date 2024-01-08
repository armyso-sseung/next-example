"use client"


import {SideMenuHeaderType} from "../../../../../../model/SideMenuType";
import style from "./sideMenuHeader.module.css";
import {useRouter} from "next/navigation";


const SideMenuHeader = ({ title } :SideMenuHeaderType) => {
    const router = useRouter()


    const handleClickBackBtn = () => {
        router.back()
    }

    const handleClickCloseBtn = () => {
        router.push("/")
    }


    if ( title ) {
        return (
            <>
                <div className={ style.header }>
                    <div className={ style.home } onClick={ handleClickBackBtn }>
                        뒤로
                    </div>
                    <div className={ style.title }>
                        { title }
                    </div>
                    <div className={ style.closeButton } onClick={ handleClickCloseBtn }>
                        닫기
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className={ style.header }>
                    <div className={ style.home } onClick={ handleClickBackBtn }>
                        홈
                    </div>
                    <div className={ style.closeButton } onClick={ handleClickCloseBtn }>
                        닫기
                    </div>
                </div>
            </>
        )
    }
}


export default SideMenuHeader