import style from "./category.module.css"


const Category = ({ category } :CategoryComponentType) => {
    const handleClickCategory = () => {
        console.log(category.dispCtgNo)
        if ( category.leafYn.includes("N") ) {
            // @ts-ignore
            // document.getElementById( category.dispCtgNo ).getElementsByClassName("subWrap")?.style.display = "block"
        }
    }

    return (
        <div id={ category.dispCtgNo }>
            <span onClick={ handleClickCategory }>{ category.dispCtgNm }</span>
            { category.leafYn.includes("N") && (
                <ul className={ style.subWrap }>
                    { category.subCategoryList?.map((ctg) => (
                        <li key={ ctg.dispCtgNo } className={ style.subCategory }>
                            <Category category={ ctg } />
                        </li>
                    )) }
                </ul>
            )}
        </div>
    )
}


export default Category