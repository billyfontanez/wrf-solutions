import React, { useState , useEffect} from 'react';
import { navigate } from 'hookrouter';

export default function AddProducts(props) {
    const [productsTitle, setProductsTitle] = useState('');
    const [productsImage, setProductsImage] = useState('');
    const [productsDescription, setProductsDescription] = useState('');
    const [productsPrice, setProductsPrice] = useState('');
    const [requestType, setRequestType] = useState(props.request);
    const [request, setRequest] = useState('');
    const [productsToEdit, setProductsToEdit] = useState(props.products);
    const [endPoint, setEndPoint] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(endPoint, {
            method: `${request}`,
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify({
                products_title: productsTitle,
                products_image: productsImage,
                products_description: productsDescription,
                products_price: productsPrice
            })
        })
        .then(res => {
            console.log(res);
            if(props.edit === true) {
                props.handleEditSubmit()
            } else {
                navigate('/');
            }
        })
        
        .catch(error => console.log('An error has occured in your post request.', error));
    }

    useEffect(() => {
        if(requestType === 'add') {
            setEndPoint(`http://127.0.0.1:5000/products/add`);
            setRequest('POST');
        } else if(requestType === 'update') {
            setEndPoint(`http://127.0.0.1:5000/products/update/${productsToEdit.products_id}`);
            setRequest('PUT');

            if(productsToEdit) {
                setProductsTitle(productsToEdit.products_title);
                setProductsImage(productsToEdit.products_image);
                setProductsDescription(productsToEdit.products_description);
                setProductsPrice(productsToEdit.products_price);
            }
        }
    },[]);

    return (
        <form className ='add-book-form' onSubmit={handleSubmit}>
            <div className='input-container'>
                <div className="add-edit-header">{requestType === 'update' ? <h1>Edit-Products</h1> : <h1>Add-Products</h1>}</div>
                <input type='text' placeholder='Products Title' name='products_title' onChange={(e) => setProductsTitle(e.target.value)} defaultValue={productsToEdit ? productsToEdit.products_title : ''}/>
                <input type='text' placeholder='Products Image' name='products_image' onChange={(e) => setProductsImage(e.target.value)} defaultValue={productsToEdit ? productsToEdit.products_image : ''}/>
                <input type='text' placeholder='Products Description' name='products_description' onChange={(e) => setProductsDescription(e.target.value)} defaultValue={productsToEdit ? productsToEdit.products_description : ''}/>
                <input type='text' placeholder='Products Price' name='products_price' onChange={(e) => setProductsPrice(e.target.value)} defaultValue={productsToEdit ? productsToEdit.products_price : ''}/>
            </div>

            <button className="submit-btn" type='submit'>Submit</button>

        </form>
    );
} 