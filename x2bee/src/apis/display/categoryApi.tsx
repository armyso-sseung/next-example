import axios from "axios";


type PropsType = {
    dispCtgNo :string
}


const displayUrl = process.env.NEXT_PUBLIC_BASE_DP_URL


export const getCategoryShop = async (dispCtgNo: string) => {
    const res = await axios.get(`${ displayUrl }/v1/shop/category/${ dispCtgNo }`, {
        params: {
            dispMediaCd: "20"
        }
    })
    // const res = await axios.get(`https://beta-venus-api-display.x2bee.com/api/display/v1/displayCategory`)
    return res.data
}