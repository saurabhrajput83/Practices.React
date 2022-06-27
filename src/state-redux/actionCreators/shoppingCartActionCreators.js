// import dispatcher from '../appDispatcher';
import * as shoppingCartService from '../../services/ShoppingCartService';
import * as lineItemService from '../../services/LineItemService';
import actionTypes from './actionTypes';

export var addShoppingCartActionCreator = function(shoppingCartId, callback) {
    return (dispatch) => {
        shoppingCartService
        .addShoppingCart({shoppingCartId: shoppingCartId})
        .then((response)=>response.json())
        .then((apiData)=>{
            if(callback){
                callback(apiData);
            } else {
                dispatch({
                    type:actionTypes.ShoppingCart_Create,
                    payload: apiData
                });
            }
          
        })
        .catch((error)=> console.log(error));
    }
};

export var addLineItemActionCreator = function(lineItemModel, callback) {
    return (dispatch) => {
        lineItemService
        .addLineItem(lineItemModel)
        .then((response)=>response.json())
        .then((apiData)=>{
            if(callback){
                callback(apiData);
            } else {
                dispatch({
                    type:actionTypes.LineItem_Create,
                    payload: apiData
                });
            }
        })
        .catch((error)=> console.log(error));
    }
};

export var getAllLineItemsByShoppingCartIdActionCreator = function(shoppingCartId) {
    return (dispatch) => {
        lineItemService
        .getAllLineItemsByShoppingCartId(shoppingCartId)
        .then((response)=> response.json())
        .then((apiData)=> {
            dispatch({
                type:actionTypes.LineItem_GetByShoppingCartId,
                payload: apiData
            });
        })
        .catch((error)=>console.log(error));
    }
};

export var deleteLineItemActionCreator = function(lineItemId, callback) {
    return (dispatch) => {
        lineItemService
        .deleteLineItem(lineItemId)
        .then((response)=> {
            if(callback){
                callback();
            } else {
                dispatch({
                    type:actionTypes.LineItem_Delete
                });
            }
        })
        .catch((error)=> console.log(error));
    }
};






    