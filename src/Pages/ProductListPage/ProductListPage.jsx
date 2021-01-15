import React from 'react';
import AppCategoryTab from '../../Components/Layout/AppCategoryTab';
import AppProductList from '../../Components/Layout/AppProductList';
import useProductListPage from './useProductListPage';

function ProductListPage() {
    const { categoryData, pageHeading, getProductList, productData } = useProductListPage()
    return (
        <div>
            <h4>{pageHeading}</h4>
            <AppCategoryTab list={categoryData} onPress={getProductList}/>
            <AppProductList productListData={productData}/>
        </div>
    )
}

export default ProductListPage;