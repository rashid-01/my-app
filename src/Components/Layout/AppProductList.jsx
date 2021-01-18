import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../Shared/ProductCard';

function AppProductList(props) {
    const {productListData} = props
    return(
        <Container>
            <Row>
                <Col sm={3}/>
                <Col sm={6}>
                    {
                        productListData.map(data => {
                            return(<ProductCard name={data.name} key={data.name} weight={data.weight} weight_unit={data.weight_unit} price={data.final_price} image={data.image_urls.x520} rating={data.rating} inStock={data.is_in_stock}/>)
                        })
                    }
                </Col>
                <Col sm={3}/>
            </Row>
        </Container>
    )
}

export default AppProductList;