import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {useSearchParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextField from '../shared/TextField'; 
import TextAreaField from '../shared/TextAreaField'; 
import CheckBoxField from '../shared/CheckBoxField';
import actionTypes from '../../state-redux/actionCreators/actionTypes';
import  * as departmentActionCreators from '../../state-redux/actionCreators/departmentActionCreators';

function AddEditDepartmentManager(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const departmentStore = useSelector((appStore)=> appStore.department);
    const dispatch = useDispatch();
    let {addDepartmentActionCreator, getDepartmentByIdActionCreator, updateDepartmentActionCreator} = 
    bindActionCreators(departmentActionCreators, dispatch);
    let initialValues = departmentStore.department;

    console.log("AddEditDepartmentManager Component init", props, departmentStore);

    useEffect(()=>{
        console.log("AddEditDepartmentManager Component useEffect");
        if(searchParams.get('id')) {
            getDepartmentByIdActionCreator(searchParams.get('id'));
        } 
    },[]);
     
    const addEditDepartmentValidationSchema = Yup.object({
        departmentId: Yup.number(),
        departmentName: Yup.string().required("Required"),
        departmentDescription: Yup.string().required("Required"),
        isActive: Yup.boolean()
    });

    const submitHandler = (values, event) => {
        console.log("AddEditDepartmentManager submitHandler", values, event);

        if(values.brandId > 0) {
            updateDepartmentActionCreator(values, redirect);
        } else {
            addDepartmentActionCreator(values, redirect);
        }
    };

    const redirect = () => {
        props.navigation('/departments');
    }


    return (
        <>
            <div className='container mt-3'>
                <h4 className='bg-light p-2 rounded'>
                    Add/Edit Department
                </h4>
                <p>
                    <button type="button" className='btn btn-primary' onClick={redirect}>
                        Return to Departments</button>
                </p>
                <Formik 
                enableReinitialize={true}
                initialValues={initialValues}
                validationSchema={addEditDepartmentValidationSchema}
                onSubmit={submitHandler}>
                {
                    (formik)=> (
                        <div>
                            <Form id='formAddEditDepartment'>
                                <input type="hidden" name='departmentId' id='departmentId'></input>
                                <TextField name="departmentName" id="departmentName" label="Department Name" />
                                <TextAreaField name="departmentDescription" id="departmentDescription" 
                                label="Department Description" rows="5" />
                                <CheckBoxField name="isActive" id="isActive" label="Is Active" />
                                <div className="form-group mt-3">
                                    <button className='btn btn-dark m-1' type='submit'>Submit</button>
                                    <button className='btn btn-danger m-1' type='reset'>Reset</button>
                                </div>
                            </Form>
                        </div>
                    )
                }
                </Formik>
            </div>
        </>
    );
    

};

export default AddEditDepartmentManager;