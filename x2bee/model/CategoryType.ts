interface DisplayCategoryType {
    dispCtgNo :string,
    dispCtgNm :string,
    dispSeq :number,
    lrgCtgNo :string,
    leafYn :string,
    depth :string,
    subCategoryList :DisplayCategoryType[] | []
}

interface CategoryComponentType {
    category :DisplayCategoryType
}