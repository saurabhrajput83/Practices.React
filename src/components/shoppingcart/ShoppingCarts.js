import React, { memo, useEffect } from 'react';

function ShoppingCarts(props) {

    console.log("ShoppingCarts Component init", props);

    const lineItems = props.lineItems;
    
    useEffect(()=>{
        console.log("ShoppingCarts Component useEffect");
    },[]);
    
    var calculateSubTotal = (item) => {
        return parseFloat(item.quantity * item.product.sellingPrice);
    };

    return (
        <>
            {lineItems && lineItems.length>0 ? 
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th>&nbsp;</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Sub Total</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {lineItems.map((item)=>{
                        return <tr key={item.lineItemId}>
                            <td>  
                                <img className='micro-image' src={item.product.productImageUrl} 
                                alt={item.product.productName}></img>
                            </td>
                            <td>{item.product.productName}</td>
                            <td>{item.quantity}</td>
                            <td>{calculateSubTotal(item)}</td>
                            <td>
                                <button className="btn btn-dark m-1" onClick={props.updateLineItem} 
                                id={item.lineItemId}>Update</button>
                                <button className="btn btn-danger m-1" onClick={props.deleteLineItem} 
                                id={item.lineItemId}>Delete</button>
                            </td>   
                        </tr>
                    })}
                </tbody>
            </table>: 
            <h4 className='text-danger'>No items found.</h4>}
        </>
    );
};

export default memo (ShoppingCarts);