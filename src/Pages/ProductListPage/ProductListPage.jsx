import React from 'react';
import { Container } from 'react-bootstrap';
import AppCategoryTab from '../../Components/Layout/AppCategoryTab';
import AppProductList from '../../Components/Layout/AppProductList';
import useProductListPage from './useProductListPage';

function ProductListPage() {
    const { categoryData, pageHeading, getProductList, productData } = useProductListPage()
    return (
        <Container>
            <h4>{pageHeading}</h4>
            <AppCategoryTab list={categoryData} onPress={getProductList} />
            <button type="button" class="btn btn-sm btn-primary" id="rotate" >Need Help</button>
            <AppProductList productListData={productData}/>
        </Container>
    )
}

export default ProductListPage;