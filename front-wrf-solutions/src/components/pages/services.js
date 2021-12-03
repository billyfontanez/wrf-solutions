import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Products from './Store/products'

export default function Services() {
    const [allProducts, setAllProducts] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [productsToRemove, setProductsToRemove] = useState({});
    const [editMode, setRemoveMode] = useState(false);

    const getAllProducts = () => {
        axios.get('https://wrf-solutions-backend.herokuapp.com/products/get')
        .then(res => {
            setAllProducts(res.data)
        })
        .catch(error => {
            console.log('An Error has occured while fetching your Products.', error);
        });
    } 

    const handleRemoveClick = (products) => {
        setProductsToRemove(products);
        setRemoveMode(true);
    }
    const handleRemoveSubmit = () => {
        setRemoveMode(false);
        getAllProducts();
    }
    
    const handleAddClick = (products_id) => {

        axios.post(`https://wrf-solutions-backend.herokuapp.com/users_products/add/${products_id}`)
        .then(res => {
            setAllProducts(allProducts.filter(products => {
                return products.products_id !== products_id;
            }))
        })
        .catch(error => {
            console.log('An error has occured while trying to move to your briefcase.', error);
        })
    }
    

    const renderProducts = () => {
        return allProducts.map(products => {
            return <Products products={products} handleAddClick={handleAddClick} handleRemoveClick={handleRemoveClick}/>
        })
    }

    useEffect(() => {
        getAllProducts();
        if(Cookies.get('users_name')) {
            setLoggedIn(false);
        }
    },[]);

    return (
        <div className="services-page-container">
            <div>
                <h1 id="services-title">{loggedIn ? Cookies.get('users_name') : ''} All Services</h1>
            </div>
            <div className='all-products'>
                {editMode ? <AddRemoveProducts products={productsToEdit} edit={editMode} request={'update'} handleEditSubmit={handleEditSubmit}/> : renderProducts()}
            </div>
        </div>
    );
} 