import axios from "axios";
import {QueryFunction} from "@tanstack/query-core";
import {BrandShopType} from "../../../model/DisplayType";


const displayUrl = process.env.NEXT_PUBLIC_BASE_DP_URL


export const getBrandShop :QueryFunction<BrandShopType, [_1 :string, _2 :string, _3 :string, _4 :string]> = async ({ queryKey }) => {
    const [ _1, _2, _3, brandNo ] = queryKey
    const res = await axios.get(`${ displayUrl }/v1/shop/brand/${ brandNo }`, {
        params: {
            dispMediaCd: "20"
        }
    })

    return res.data
}