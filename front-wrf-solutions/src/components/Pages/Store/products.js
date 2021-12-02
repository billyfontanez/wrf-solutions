import React from 'react';

export default function Products(props) {
    const {products_title, products_image, products_description, products_price, products_category, products_id} = props.products;
    

    return (
        <div className="products-container">
            <div className="product-title">{products_title}</div>
            {/*<div className="image">{products_image}</div>*/}
            <div className='description'>{products_description}</div>
            <div className='price'>${products_price}</div>
            <div className='category'>{products_category}</div>
            <div className='product-buttons'>
                <button className="product-add-btn button" onClick={() => props.handleAddClick(products_id)}>Add To Briefcase</button> 
                <button className="book-remove-btn button" onClick={() => props.handleRemoveClick(props.products)}>Remove From Briefcase</button>
            </div>
        </div>
    );
}