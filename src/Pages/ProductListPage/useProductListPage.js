import React, { useEffect, useState } from 'react';
import HttpClient from '../../Utilities/HttpClient';

function useProductListPage() {
    const [categoryData, setCategoryData] = useState([]);
    const [pageHeading, setPageHeading] = useState('');

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

    useEffect(() => {
        getCategoryList()
    }, [])
    
    return {
        categoryData,
        pageHeading
    }
}

export default useProductListPage;