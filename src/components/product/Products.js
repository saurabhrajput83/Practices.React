import React, { memo, useEffect} from 'react';

function Products(props) {

    console.log("Products Component init", props);

    const products = props.products;
    
    useEffect(()=>{
        console.log("Products Component useEffect");
    },[props.products]);
    
    return (
        <>
            {products.length>0 ? 
            <div className='row'>
                {products && products.length>0 && products.map((item)=>{
                    return <div className='col-md-3' key={item.productId}>
                                <div className='card'>
                                    <div className='card-header'>
                                        <div>{item.productName}</div>
                                    </div>
                                    <div className='card-body'>
                                        <img className='small-image' src={item.productImageUrl} alt={item.productName}></img>
                                        <div><strong>Description:</strong> {item.productDescription}</div>
                                        <div><strong>List Price:</strong> {item.listPrice}</div>
                                        <div><strong>Selling Price:</strong> {item.sellingPrice}</div>
                                        <div><strong>Quantity:</strong> {item.quantity}</div>
                                        <div><strong>Brand:</strong> {item.brand.brandName}</div>
                                        <div><strong>Department:</strong> {item.department.departmentName}</div>
                                    </div>
                                    <div className='card-footer'>
                                        <button className='btn btn-success m-1' type='button' onClick={props.buyProduct} 
                                        id={item.productId}>Buy</button>
                                        <button className='btn btn-dark m-1' type='button' onClick={props.editProduct} 
                                        id={item.productId}>Edit</button>
                                        <button className='btn btn-danger' type='button' onClick={props.deleteProduct} 
                                        id={item.productId}>Delete</button>
                                    </div>
                                </div>
                            </div>;
                    })}
            </div>: 
            <h4 className='text-danger'>No Products found.</h4>}
        </>
    );
};

export default memo (Products);