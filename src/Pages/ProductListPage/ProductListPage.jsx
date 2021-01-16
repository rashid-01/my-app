import React from 'react';
import { Container } from 'react-bootstrap';
import AppCategoryTab from '../../Components/Layout/AppCategoryTab';
import AppProductList from '../../Components/Layout/AppProductList';
import AppSpacer from '../../Components/Shared/AppSpacer';
import useProductListPage from './useProductListPage';

function ProductListPage() {
    const { categoryData, pageHeading, getProductList, productData } = useProductListPage()
    return (
        <Container class="app-padding">
            <h4>{pageHeading}</h4>
            <AppCategoryTab list={categoryData} onPress={getProductList} />
            <div style={{ position: 'relative', float:'right' }}>
                <a href="#"  class="btn btn-lg btn-orange" id="rotate">Need Help</a>
            </div>
            <AppProductList productListData={productData}/>
        </Container>
    )
}

export default ProductListPage;