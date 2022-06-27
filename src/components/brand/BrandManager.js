import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports'; 
import Brands from './Brands';
import * as brandActionCreators from '../../state-redux/actionCreators/brandActionCreators';
import { bindActionCreators } from 'redux';
import actionTypes from '../../state-redux/actionCreators/actionTypes';

function BrandManager(props) {

    const brandStore = useSelector((appStore)=> appStore.brand);
    const dispatch = useDispatch();
    let {deleteBrandActionCreator, getAllBrandsActionCreator} = 
    bindActionCreators(brandActionCreators, dispatch);

    console.log("BrandManager Component init ", props, brandStore);

    useEffect(()=>{
        console.log("BrandManager Component useEffect");
        getAllBrandsActionCreator();
    },[]);

    const addBrand = (event)=> {
        console.log("BrandManager addBrand", event);
        props.navigation('/addbrand');
    };

    const editBrand = (event)=> {
        //brandId
        console.log("BrandManager editBrand", event);
        let brandId = parseInt(event.target.id);
        props.navigation('/editbrand?id='+brandId);
    };

    const deleteBrand = (event)=> {
        //brandId
        console.log("BrandManager deleteBrand", event);
        let brandId = parseInt(event.target.id);
        deleteBrandActionCreator(brandId, getAllBrandsActionCreator);
        
    };

    return (
        <>
            <div className='container mt-3'>
                <h4 className='bg-light p-2 rounded'>
                    Brands
                </h4>
                <p>
                    <button type="button" className='btn btn-primary' onClick={addBrand}>Add New Brand</button>
                </p>
                {brandStore.brands && brandStore.brands.length > 0 &&
                <Brands brands={brandStore.brands} editBrand={editBrand} deleteBrand={deleteBrand} />}
            </div>
        </>
    );
};

export default BrandManager;