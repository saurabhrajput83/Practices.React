// import dispatcher from '../appDispatcher';
import * as brandService from '../../services/BrandService';
import actionTypes from './actionTypes';

export var addBrandActionCreator = function(brandModel, callback) {
    return (dispatch) => {
        brandService
        .addBrand(brandModel)
        .then((response)=>response.json())
        .then((apiData)=> {
            console.log("addBrand apiData", apiData);  
            if(callback){
                callback();
            } else {
                dispatch({
                    type:actionTypes.Brand_Create,
                    payload: apiData
                });
            }
        })
        .catch((error)=> console.log(error));
    }
};

export var deleteBrandActionCreator = function(brandId, callback) {
    return (dispatch) => {
        brandService
        .deleteBrand(brandId)
        .then((response)=> {
            if(callback){
                callback();
            } else {
                dispatch({
                    type:actionTypes.Brand_Delete            
                });
            }
         })
        .catch((error)=> console.log(error));
    }
};

export var getAllBrandsActionCreator = function() {
    return (dispatch) => {
        brandService
        .getAllBrands()
        .then((response)=> response.json())
        .then((apiData)=> {
            console.log("getAllBrands apiData", apiData);  
            dispatch({
                type:actionTypes.Brand_GetAll,
                payload: apiData
            });
        })
        .catch((error)=>console.log(error));
    }
};

export var getBrandByIdActionCreator = function(brandId) {
    return (dispatch) => {
        brandService
        .getBrandById(parseInt(brandId))
        .then((response)=>response.json())
        .then((apiData)=> {
            console.log("getBrandById apiData", apiData); 
            dispatch({
                type:actionTypes.Brand_GetById,
                payload: apiData
            });
        })
        .catch((error)=>console.log(error));
    }
};


export var updateBrandActionCreator = function(brandModel, callback) {
    return (dispatch) => {
        brandService
        .updateBrand(brandModel)
        .then((response)=>response.json())
        .then((apiData)=> {
            console.log("updateBrand", apiData);  
            if(callback){
                callback();
            } else {
                dispatch({
                    type:actionTypes.Brand_Update,
                    payload: apiData
                });
            } 
        })
        .catch((error)=> console.log(error));
    }
};



    