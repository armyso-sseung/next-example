interface ShopInfoType {
    shopNo :string,
    shopTypCd :string,
    dpmlNo :string,
    dispShopNm :string,
    dispSeq :string,
    dispYn :string,
    prtTypCd :string,
    shopDescCont :string
    dispCtgNo ?:string,
    brandNo ?:string,
}

interface BrandInfoType {
    brandNo :string,
    useYn :string,
    brandImgPathNm :string,
    brandImgFileNm :string,
    brandNm :string,
    brandDescCmt :string,
    schKwdNm :string
}

interface CategoryInfoType {
    dispCtgNo: string,
    dispCtgNm: string,
    dispSeq: number,
    lrgCtgNo: string,
    leafYn: string,
    depth: string
}

interface TemplateType {
    tmplNo: string,
    shopTmplNo: string,
    tmplNm: string,
    tmplTypCd: string,
    tmplPathNm: string,
    tmplFileNm: string,
    useYn: string
}

interface CornerType {
    conrNo: string,
    conrNm: string,
    useYn: string,
    conrTypCd: string,
    vueCmptId: string,
    conrDesc: string,
    setCnt: number,
    setList :SetType[]
}

interface SetType {
    dispSetSeq: string,
    dispShopNo: string,
    tmplConrNo: string,
    setNm: string,
    dispStrDtm: Date,
    dispEndDtm: Date,
    dispSeq: number,
    dispYn: string,
    setDesc: string,
    conrNo: string,
    contentInfoList :ContentInfoType[]
}

interface ContentInfoType {
    dispSetSeq: string,
    conrTgtCd: string,
    conrTgtCnt: number,
    textList ?:BannerTextType[],
    imageList ?:BannerImageType[]
}

interface BannerTextType {
    movFrmeCd: string,
    contTitleNm: string
}

interface BannerImageType {
    movFrmeCd: string,
    contTitleNm: string,
    contPathNm: string,
    contFileNm: string,
    pcContPathNm: string,
    pcContFileNm: string
}

export type ShopType = {
    brandInfo ?:BrandInfoType,
    categoryInfo ?:CategoryInfoType,
    cornerList ?:CornerType[]
    shopInfo ?:ShopInfoType,
    template ?:TemplateType,
    tmplFileNm ?:string,
}