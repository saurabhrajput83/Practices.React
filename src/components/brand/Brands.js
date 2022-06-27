import React, { memo } from 'react';

function Brands(props) {

    console.log("Brands Component init", props);

    const brands = props.brands;
    
    return (
        <>
            {(brands && brands.length>0) ? 
            <table className='table table-stripped'>
                <thead>
                    <tr>
                        <th>Brand Id</th>
                        <th>Brand Name</th>
                        <th>Brand Description</th>
                        <th>Is Active</th>
                        <th>&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {brands.map((item)=>{
                        return <tr key={item.brandId}>
                            <td>{item.brandId}</td>
                            <td>{item.brandName}</td>
                            <td>{item.brandDescription}</td>
                            <td>{''+item.isActive}</td>
                            <td>
                                <button className="btn btn-dark m-1" onClick={props.editBrand} 
                                id={item.brandId}>Edit</button>
                                &nbsp;
                                <button className="btn btn-danger m-1" onClick={props.deleteBrand} 
                                id={item.brandId}>Delete</button>
                            </td>   
                        </tr>
                    })}
                </tbody>
            </table>: 
            <h4 className='text-danger'>No Brands found.</h4>}
        </>
    );
};

export default memo (Brands);