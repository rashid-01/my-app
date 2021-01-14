import React, { useEffect } from 'react';
import AppCategoryTab from '../../Components/Layout/AppCategoryTab';
import useProductListPage from './useProductListPage';

function ProductListPage() {
    const { categoryData, pageHeading } = useProductListPage()
    console.log('all data', categoryData, pageHeading)
    return (
        <div>
            <h4>{pageHeading}</h4>
            <AppCategoryTab list={categoryData}/>
        </div>
    )
}

export default ProductListPage;