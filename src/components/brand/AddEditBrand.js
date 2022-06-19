import React, {memo} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextField from '../shared/TextField'; 
import TextAreaField from '../shared/TextAreaField'; 
import CheckBoxField from '../shared/CheckBoxField';

function AddEditBrand(props) {

    console.log("AddEditBrand Component init", props);

    let initialValues = props.values;
    
    const addEditBrandValidationSchema = Yup.object({
        brandId: Yup.number(),
        brandName: Yup.string().required("Required"),
        brandDescription: Yup.string().required("Required"),
        isActive: Yup.boolean()
    });

    const submitHandler = (values, event) => {
        console.log("AddEditBrand submitHandler", values, event);

        if(props.createUpdateHandler) {
            props.createUpdateHandler(event, values);
            event.resetForm();
        }

    };

    return (
        <>
            <Formik 
                enableReinitialize
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
        </>
    );
    

};

export default memo(AddEditBrand);