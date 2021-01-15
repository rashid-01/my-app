import React from 'react';

function ProductCard(){
    return (
        <div class="card">
        <div class="row no-gutters px-2 py-2">
            <div class="col-auto">
                <img src="https://d1ebdenobygu5e.cloudfront.net/media/catalog/product/gallery/resized/520/h/a/hair-vitalizer-serum-for-hair-growth_1_1_1.jpg" class="img-fluid" style={{height:120, width:100}} alt=""/>
            </div>
            <div class="col">
                <div class="card-block px-2">
                    <h5 class="card-title mb-1">Body Wash - Black Magic - 200ml</h5>
                    <p class="text-muted mb-1">200ml</p>
                    <h5 class="card-text">&#8377; 299</h5>
                    <a href="#" class="btn btn-lg btn-green">ADD TO CART</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProductCard;