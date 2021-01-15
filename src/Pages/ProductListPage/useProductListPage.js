import React, { useEffect, useState } from 'react';
import HttpClient from '../../Utilities/HttpClient';

function useProductListPage() {
    const [categoryData, setCategoryData] = useState([]);
    const [pageHeading, setPageHeading] = useState('');
    const [productData, setProductData] = useState([]);

    const getCategoryList = async () => {
        try {
            let apiResponse = await HttpClient.request('homemenucategories/v1.0.1?device_type=mob');
            console.log('data', apiResponse)
            setCategoryData(apiResponse.data.category_list)
            setPageHeading(apiResponse.data.heading)
        } catch (error) {
            console.log('Errr', error)
        }
    }

    const getProductList = async(cat_id) => {
        console.log('catiiid', cat_id)
        try {
            let apiResponse = await HttpClient.request(`catalog/v1.0.1?category_id=${cat_id}`)
            setProductData(apiResponse.data.products)
        } catch (error) {
            console.log('pro err', error)
        }
    }

    useEffect(() => {
        getCategoryList()
        getProductList()
    }, [])
    
    return {
        categoryData,
        pageHeading,
        getProductList,
        productData
    }
}

export default useProductListPage;