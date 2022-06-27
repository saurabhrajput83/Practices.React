import React, { useEffect } from 'react';
import {bindActionCreators} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import ShoppingCarts from './ShoppingCarts';
import * as shoppingCartActionCreators from '../../state-redux/actionCreators/shoppingCartActionCreators';


function ShoppingCartManager(props) {

    const shoppingCartStore = useSelector((appStore)=> appStore.shoppingCart);

    const dispatch = useDispatch();
    let {getAllLineItemsByShoppingCartIdActionCreator, deleteLineItemActionCreator} 
    = bindActionCreators(shoppingCartActionCreators, dispatch);

    console.log("ShoppingCartManager Component init", props, shoppingCartStore);

    useEffect(()=> {
        console.log("ShoppingCartManager useEffect");
        if(localStorage.getItem("shoppingCartId")){
            getAllLineItemsByShoppingCartIdActionCreator(localStorage.getItem("shoppingCartId"));
        }
    }, []);

   
   
    const deleteLineItem = (event)=> {

        console.log("ShoppingCartManager deleteLineItem", event);
        let lineItemId = parseInt(event.target.id);
        deleteLineItemActionCreator(lineItemId, ()=>{
            getAllLineItemsByShoppingCartIdActionCreator(localStorage.getItem("shoppingCartId"))
        })
       
    };

    return (
        <>
            <div className='container mt-3'>
                <h4 className='bg-light p-2 rounded'>
                    Your Shopping Cart
                </h4>
                <ShoppingCarts lineItems={shoppingCartStore.lineItems} deleteLineItem = {deleteLineItem} />
            </div>
        </>
    );


};

export default ShoppingCartManager;