import axios from "axios";


const displayUrl = process.env.NEXT_PUBLIC_BASE_DP_URL


export const getSideMenuCategory = async () :Promise<DisplayCategoryType[]> => {
    const res = await axios.get(`${ displayUrl }/v1/displayCategory`)
    // const res = await axios.get(`https://beta-venus-api-display.x2bee.com/api/display/v1/displayCategory`)
    return res.data
}

export const getSideMenuBrand = async () => {
    const res = await axios.get(`${ displayUrl }/v1/shop/brand`)
    return res.data
}