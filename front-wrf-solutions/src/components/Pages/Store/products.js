import React from 'react';

export default function Products(props) {
    const {products_title, products_image, products_description, products_price, products_id} = props.products;

    return (
        <div className="products-container">
            <div className="title">{products_title}</div>
            <div className="image">{products_image}</div>
            <div className='description'>{products_description}</div>
            <div className='price'>{products_price}</div>

            <button className="book-btn" onClick={() => props.handleAddClick(products_id)}>Add To Briefcase</button> 
            <button className="book-btn" onClick={() => props.handleRemoveClick(props.products)}>Remove From Briefcase</button>
            <h1>Test</h1>
        </div>

    );
}