import React from 'react';

export default function Products(props) {
    const {products_title, products_image, products_description, products_price, products_id} = props.products;

    return (
        <div className="products-container">
            <div className="title">{products_title}</div>
            <div className="image">{products_image}</div>
            <div className='description'>{products_description}</div>
            <div className='price'>{products_price}</div>

            <button className="book-btn" onClick={() => props.handleDeleteClick(id)}>Add To Briefcase</button> //make add to briefcase
            <button className="book-btn" onClick={() => props.handleEditClick(props.book)}>Remove From Briefcase</button> //remove from briefcase
        </div>
    );
}