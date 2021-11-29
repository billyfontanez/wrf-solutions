import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import Products from './Store/products'
import AddRemoveProducts from './Store/addRemoveProducts';

export default function Services() {
    const [allProducts, setAllProducts] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false);
    const [productsToEdit, setProductsToEdit] = useState({});
    const [editMode, setEditMode] = useState(false);

    const getAllProducts = () => {
        axios.get('http://127.0.0.1:5000/products/get')
        .then(res => {
            setAllProducts(res.data)
        })
        .catch(error => {
            console.log('An Error has occured while fetching your Products.', error);
        });
    } 

    const handleEditClick = (products) => {
        setProductsToEdit(products);
        setEditMode(true);
    }
    const handleEditSubmit = () => {
        setEditMode(false);
        getAllProducts();
    }
    //needs to post in briefcase
    const handleDeleteClick = (products_id) => {

        axios.abc(`http://127.0.0.1:5000/products/abc/${products_id}`)
        .then(res => {
            setAllProducts(allProducts.filter(products => {
                return products.products_id !== products_id;
            }))
        })
        .catch(error => {
            console.log('An error has occured while trying to move to your briefcase.', error);
        })
    }
    //

    const renderProducts = () => {
        return allProducts.map(products => {
            return <Products products={products} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick}/>
        })
    }

    useEffect(() => {
        getAllProducts();
        if(Cookies.get('users_name')) {
            setLoggedIn(false);
        }
    },[]);

    return (
        <div className="home-page-container">
            <h1 id="home-title">{loggedIn ? Cookies.get('users_name') : ''} All Services</h1>
            {editMode ? <AddRemoveProducts products={productsToEdit} edit={editMode} request={'update'} handleEditSubmit={handleEditSubmit}/> : renderProducts()}
        </div>
    );
} 