import React from 'react';
import AppCategoryTab from '../../Components/Layout/AppCategoryTab';
import AppProductList from '../../Components/Layout/AppProductList';
import useProductListPage from './useProductListPage';

function ProductListPage() {
    const { categoryData, pageHeading, getProductList } = useProductListPage()
    console.log('all data', categoryData, pageHeading)
    return (
        <div>
            <h4>{pageHeading}</h4>
            <AppCategoryTab list={categoryData} onPress={getProductList}/>
            <AppProductList/>
        </div>
    )
}

export default ProductListPage;