// import dispatcher from '../appDispatcher';
import * as departmentService from '../../services/DepartmentService';
import actionTypes from './actionTypes';

export var addDepartmentActionCreator = function(departmentModel, callback) {
    return (dispatch) => {
        departmentService
        .addDepartment(departmentModel)
        .then((response)=>response.json())
        .then((apiData)=> {
            console.log("addDepartment apiData", apiData);  
            if(callback){
                callback();
            } else {
                dispatch({
                    type:actionTypes.Department_Create,
                    payload: apiData
                });
            }
        })
        .catch((error)=> console.log(error));
    }
};

export var deleteDepartmentActionCreator = function(departmentId, callback) {
    return (dispatch) => {
        departmentService
        .deleteDepartment(departmentId)
        .then((response)=> {
            if(callback){
                callback();
            } else {
                dispatch({
                    type:actionTypes.Department_Delete            
                });
            }
         })
        .catch((error)=> console.log(error));
    }
};

export var getAllDepartmentsActionCreator = function() {
    return (dispatch) => {
        departmentService
        .getAllDepartments()
        .then((response)=> response.json())
        .then((apiData)=> {
            console.log("getAllDepartments apiData", apiData);  
            dispatch({
                type:actionTypes.Department_GetAll,
                payload: apiData
            });
        })
        .catch((error)=>console.log(error));
    }
};

export var getDepartmentByIdActionCreator = function(departmentId) {
    return (dispatch) => {
        departmentService
        .getDepartmentById(parseInt(departmentId))
        .then((response)=>response.json())
        .then((apiData)=> {
            console.log("getDepartmentById apiData", apiData); 
            dispatch({
                type:actionTypes.Department_GetById,
                payload: apiData
            });
        })
        .catch((error)=>console.log(error));
    }
};


export var updateDepartmentActionCreator = function(departmentModel, callback) {
    return (dispatch) => {
        departmentService
        .updateDepartment(departmentModel)
        .then((response)=>response.json())
        .then((apiData)=> {
            console.log("updateDepartment", apiData);  
            if(callback){
                callback();
            } else {
                dispatch({
                    type:actionTypes.Department_Update,
                    payload: apiData
                });
            } 
        })
        .catch((error)=> console.log(error));
    }
};




    