import React, {useEffect} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextField from '../shared/TextField'; 
import TextAreaField from '../shared/TextAreaField'; 
import CheckBoxField from '../shared/CheckBoxField';
import {useSearchParams} from 'react-router-dom';
import * as brandActionCreators from '../../state-redux/actionCreators/brandActionCreators';
import actionTypes from '../../state-redux/actionCreators/actionTypes';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';

function AddEditBrandManager(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const brandStore = useSelector((appStore)=> appStore.brand);
    const dispatch = useDispatch();
    let {addBrandActionCreator, getBrandByIdActionCreator, updateBrandActionCreator} = 
    bindActionCreators(brandActionCreators, dispatch);
    let initialValues = brandStore.brand;
    
    console.log("AddEditBrand Component init", props, brandStore);

    useEffect(()=>{
        console.log("AddEditBrand Component useEffect");
        if(searchParams.get('id')) {
            getBrandByIdActionCreator(searchParams.get('id'));
        }
    },[]);

   
     
    const addEditBrandValidationSchema = Yup.object({
        brandId: Yup.number(),
        brandName: Yup.string().required("Required"),
        brandDescription: Yup.string().required("Required"),
        isActive: Yup.boolean()
    });

    const submitHandler = (values, event) => {
        console.log("AddEditBrand submitHandler", values, event);

        if(values.brandId > 0) {
            updateBrandActionCreator(values, redirect);
        } else {
            addBrandActionCreator(values, redirect);
        }
    };

    const redirect = () => {
        props.navigation('/brands');
    };

    
    return (
        <>
            <div className='container mt-3'>
                <h4 className='bg-light p-2 rounded'>
                    Add/Edit Brand
                </h4>
                <p>
                    <button type="button" className='btn btn-primary' onClick={redirect}>
                        Return to Brands</button>
                </p>
                <Formik 
                    enableReinitialize={true}
                    initialValues={initialValues}
                    validationSchema={addEditBrandValidationSchema}
                    onSubmit={submitHandler}>
                {
                    (formik)=> (
                        <div>
                            <Form id='formAddEditBrand'>
                                <input type="hidden" name='brandId' id='brandId'></input>
                                <TextField name="brandName" id="brandName" label="Brand Name" />
                                <TextAreaField name="brandDescription" id="brandDescription" label="Brand Description" 
                                    rows="5" />
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

export default AddEditBrandManager;