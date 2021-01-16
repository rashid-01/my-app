import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../Shared/ProductCard';

function AppProductList(props) {
    console.log('at List page', props)
    const {productListData} = props
    return(
        <Container class="app-padding">
            <Row>
                <Col sm={3}/>
                <Col sm={6}>
                    {
                        productListData.map(data => {
                            return(<ProductCard name={data.name} weight={data.weight} weight_unit={data.weight_unit} price={data.final_price} image={data.image_urls.x520} rating={data.rating} inStock={data.is_in_stock}/>)
                        })
                    }
                </Col>
                <Col sm={3}/>
            </Row>
        </Container>
//         <CardColumns>
//   <Card>
//     <Card.Img variant="left" src="https://picsum.photos/id/237/200/300" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This content is a little bit longer.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="left" src="https://picsum.photos/id/237/200/300" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This card has supporting text below as a natural lead-in to additional
//         content.{' '}
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="left" src="https://picsum.photos/id/237/200/300" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
//   <Card>
//     <Card.Img variant="left" src="https://picsum.photos/id/237/200/300" />
//     <Card.Body>
//       <Card.Title>Card title</Card.Title>
//       <Card.Text>
//         This is a wider card with supporting text below as a natural lead-in to
//         additional content. This card has even longer content than the first to
//         show that equal height action.
//       </Card.Text>
//     </Card.Body>
//     <Card.Footer>
//       <small className="text-muted">Last updated 3 mins ago</small>
//     </Card.Footer>
//   </Card>
  
// </CardColumns>
    )
}

export default AppProductList;