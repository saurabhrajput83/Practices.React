import React, { useEffect } from 'react';
import {bindActionCreators} from 'redux';
import {useSelector, useDispatch} from 'react-redux';
import Departments from './Departments';
import * as departmentActionCreators from '../../state-redux/actionCreators/departmentActionCreators';
import actionTypes from '../../state-redux/actionCreators/actionTypes';

function DepartmentManager (props) {

    const departmentStore = useSelector((appStore)=> appStore.department);
    const dispatch = useDispatch();
    let {deleteDepartmentActionCreator, getAllDepartmentsActionCreator} 
    = bindActionCreators(departmentActionCreators, dispatch);
    
    console.log("DepartmentManager Component init", props, departmentStore);

    useEffect(()=>{
        console.log("DepartmentManager Component useEffect");
        getAllDepartmentsActionCreator();
    },[]);

    const addDepartment = (event)=> {
        console.log("DepartmentManager addDepartment", event);
        props.navigation('/adddepartment');
    };

    const editDepartment = (event)=> {
        //departmentId
        console.log("DepartmentManager editDepartment", event);
        let departmentId = parseInt(event.target.id);
        props.navigation('/editdepartment?id='+departmentId);
    };

    const deleteDepartment = (event)=> {
        //departmentId
        console.log("DepartmentManager deleteDepartment", event);
        let brandId = parseInt(event.target.id);
        deleteDepartmentActionCreator(brandId, getAllDepartmentsActionCreator);
        
    };

    return (
        <>
            <div className='container mt-3'>
                <h4 className='bg-light p-2 rounded'>
                    Departments
                </h4>
                <p>
                    <button type="button" className='btn btn-primary' onClick={addDepartment}>Add New Department</button>
                </p>
                {departmentStore.departments && departmentStore.departments.length >0 &&
                <Departments departments={departmentStore.departments} 
                editDepartment={editDepartment} deleteDepartment={deleteDepartment} />}
            </div>
        </>
    );
    

};

export default DepartmentManager;