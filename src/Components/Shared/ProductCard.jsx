import React from 'react';
import AppButton from './AppButton';

function ProductCard(props){
    const{name, weight, weight_unit, price, inStock, image, rating} = props
    return (
        <div class="card">
        <div class="row no-gutters py-4">
            <div class="col-auto">
                <img src={`${image}`} class="img-fluid" class="image-style" alt=""/>
            </div>
            <div class="col">
                <div class="card-block px-4">
                        <div class="d-flex flex-row">
                            <div class="flex-8">
                                <h5 class="card-title mb-1">{name}</h5>
                            </div>
                            <div class="flex-2">
                                <p class="text-muted f-right">{rating} {rating ? <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                                </svg> : ''}</p>
                            </div>
                        </div>        
                    <p class="text-muted mb-1">{weight}{weight_unit}</p>
                    <h5 class="card-text font-weight-bold">&#8377; {price}</h5>
                        <AppButton variant={inStock ? 'success' : 'secondary'} size={'lg'} buttonText={inStock ? 'ADD TO CART' : 'OUT OF STOCK'} isDisabled={!inStock}/>
                        
                </div>
            </div>
            </div>
        </div>
        
    )
}

export default ProductCard;