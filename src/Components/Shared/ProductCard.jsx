import React from 'react';

function ProductCard(props){
    const{name, weight, weight_unit, price, inStock, image} = props
    return (
        <div class="card">
        <div class="row no-gutters px-2 py-2">
            <div class="col-auto">
                <img src={`${image}`} class="img-fluid" style={{height:120, width:100}} alt=""/>
            </div>
            <div class="col">
                <div class="card-block px-2">
                    <h5 class="card-title mb-1">{name}</h5>
                    <p class="text-muted mb-1">{weight}{weight_unit}</p>
                    <h5 class="card-text">&#8377; {price}</h5>
                    <a href="#" class="btn btn-lg btn-green">ADD TO CART</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductCard;