// import dispatcher from '../appDispatcher';
import * as productService from '../../services/ProductService';
import actionTypes from './actionTypes';

export var addProductActionCreator = function(productModel, callback) {
    return (dispatch) => {
        productService
        .addProduct(productModel)
        .then((response)=>response.json())
        .then((apiData)=> {
            console.log("addProduct apiData", apiData);  
            if(callback){
                callback();
            } else {
                dispatch({
                    type:actionTypes.Product_Create,
                    payload: apiData
                });
            }
        })
        .catch((error)=> console.log(error));
    }
};

export var deleteProductActionCreator = function(productId, callback) {
    return (dispatch) => {
        productService
        .deleteProduct(productId)
        .then((response)=> {
            if(callback){
                callback();
            } else {
                dispatch({
                    type:actionTypes.Product_Delete            
                });
            }
         })
        .catch((error)=> console.log(error));
    }
};

export var getAllProductsActionCreator = function() {
    return (dispatch) => {
        productService
        .getAllProducts()
        .then((response)=> response.json())
        .then((apiData)=> {
            console.log("getAllProducts apiData", apiData);  
            dispatch({
                type:actionTypes.Product_GetAll,
                payload: apiData
            });
        })
        .catch((error)=>console.log(error));
    }
};

export var getProductByIdActionCreator = function(productId) {
    return (dispatch) => {
        productService
        .getProductById(parseInt(productId))
        .then((response)=>response.json())
        .then((apiData)=> {
            console.log("getProductById apiData", apiData); 
            dispatch({
                type:actionTypes.Product_GetById,
                payload: apiData
            });
        })
        .catch((error)=>console.log(error));
    }
};


export var updateProductActionCreator = function(productModel, callback) {
    return (dispatch) => {
        productService
        .updateProduct(productModel)
        .then((response)=>response.json())
        .then((apiData)=> {
            console.log("updateProduct", apiData);  
            if(callback){
                callback();
            } else {
                dispatch({
                    type:actionTypes.Product_Update,
                    payload: apiData
                }); 
            }
        })
        .catch((error)=> console.log(error));
    }
};
