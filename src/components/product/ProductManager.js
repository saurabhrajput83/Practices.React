import React, { useEffect } from 'react';
import {bindActionCreators} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import Products from './Products';
import * as productActionCreators from '../../state-redux/actionCreators/productActionCreators';
import * as shoppingCartActionCreators from '../../state-redux/actionCreators/shoppingCartActionCreators';

function ProductManager (props) {

    const appStore = useSelector((appStore)=> appStore);
    const productStore = appStore.product;

    const dispatch = useDispatch();
    let {deleteProductActionCreator, getAllProductsActionCreator} 
    = bindActionCreators(productActionCreators, dispatch);
    let {addShoppingCartActionCreator, addLineItemActionCreator} 
    = bindActionCreators(shoppingCartActionCreators, dispatch);
    
    console.log("ProductManager Component init", props, productStore);

    useEffect(()=>{
        console.log("ProductManager Component useEffect");
        getAllProductsActionCreator();
    },[]);

    const addProduct = (event)=> {
        console.log("ProductManager addProduct", event);
        props.navigation('/addProduct');
    };

    const editProduct = (event)=> {
        //productId
        console.log("ProductManager editProduct", event);
        let productId = parseInt(event.target.id);
        props.navigation('/editProduct?id='+productId);
    };

    const deleteProduct = (event)=> {
        //productId
        console.log("ProductManager deleteProduct", event);
        let productId = parseInt(event.target.id);
        deleteProductActionCreator(productId, getAllProductsActionCreator);
        
    };

    const buyProduct = (event) =>{
        
        let productId =  parseInt(event.target.id);
        let shoppingCartId = 0;
        if(localStorage.getItem("shoppingCartId"))
            shoppingCartId = localStorage.getItem("shoppingCartId");
        
        localStorage.setItem("productId", productId);

        if(shoppingCartId>0){
            addlineItem({shoppingCartId: shoppingCartId});
        } else {
            addShoppingCartActionCreator(shoppingCartId, addlineItem)
        }
    };

    const addlineItem = (shoppingCartObj) => {
        
        if(shoppingCartObj &&  shoppingCartObj.shoppingCartId) {
            
            let shoppingCartId = shoppingCartObj.shoppingCartId;
            localStorage.setItem("shoppingCartId", shoppingCartId);
            
            let lineItemModel = {
                productId: localStorage.getItem("productId"), 
                shoppingCartId: shoppingCartId, 
                quantity: 1
            };
            addLineItemActionCreator(lineItemModel, addlineItemSuccess);
        }
    };

    const addlineItemSuccess = () => {
        props.navigation('/shoppingcart');
    };

    return (
        <>
            <div className='container mt-3'>
                <h4 className='bg-light p-2 rounded'>
                    Products
                </h4>
                <p>
                    <button type="button" className='btn btn-primary' onClick={addProduct}>Add New Product</button>
                    <button type="button" className='btn btn-primary invisible' id='divAddEditProductModalOpen' data-bs-toggle="modal" data-bs-target="#divAddEditProductModal">Add New Product</button>
                </p>
                <Products 
                products={productStore.products} 
                editProduct={editProduct} 
                deleteProduct={deleteProduct}
                buyProduct={buyProduct} />
            </div>
        </>
    );
    

};

export default ProductManager;