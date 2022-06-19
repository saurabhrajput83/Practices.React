import React, { useState, useEffect } from 'react';
import ShoppingCarts from './ShoppingCarts';
import * as lineItemService from '../../services/LineItemService';
import * as shoppingCartService from '../../services/ShoppingCartService';


function ShoppingCartManager(props) {

    const [shoppingcart, setShoppingcart]  = useState([]);

    useEffect(()=> {
        console.log("ShoppingCartManager useEffect");
        loadShoppingcart();
    }, []);

    const loadShoppingcart = () => {
        console.log("ShoppingCartManager loadLineItems");
        let shoppingCartId = 0;
        if(localStorage.getItem("shoppingCartId"))
            shoppingCartId = parseInt(localStorage.getItem("shoppingCartId"));

        if(shoppingCartId > 0) {
            lineItemService
            .getAllLineItemsByShoppingCartId(shoppingCartId)
            .then((response)=> response.json())
            .then((data)=> {
                console.log("ShoppingCartManager loadShoppingcart data", data)
                setShoppingcart(data);
            })
            .catch((error)=>console.log(error));
        } else {

        }
    };
   
    const deleteLineItem = (event)=> {

        console.log("ShoppingCartManager deleteLineItem", event);
        let lineItemId = parseInt(event.target.id);
        lineItemService
        .deleteLineItem(lineItemId)
        .then((response)=> {
            loadShoppingcart();
        })
        .catch((error)=> console.log(error));
    };
    

    return (
        <>
            <div className='container mt-3'>
                <h4 className='bg-light p-2 rounded'>
                    Your Shopping Cart
                </h4>
                <ShoppingCarts lineItems={shoppingcart} deleteLineItem = {deleteLineItem} />
            </div>
        </>
    );


};

export default ShoppingCartManager;