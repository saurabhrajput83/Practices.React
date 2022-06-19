import React, {memo} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextField from '../shared/TextField'; 
import TextAreaField from '../shared/TextAreaField'; 
import CheckBoxField from '../shared/CheckBoxField';

function AddEditDepartment(props) {

    console.log("AddEditDepartment Component init", props);

    let initialValues = props.values;
    
    const addEditDepartmentValidationSchema = Yup.object({
        departmentId: Yup.number(),
        departmentName: Yup.string().required("Required"),
        departmentDescription: Yup.string().required("Required"),
        isActive: Yup.boolean()
    });

    const submitHandler = (values, event) => {
        console.log("AddEditDepartment submitHandler", values, event);

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
                validationSchema={addEditDepartmentValidationSchema}
                onSubmit={submitHandler}>
            {
                (formik)=> (
                    <div>
                        <Form id='formAddEditDepartment'>
                            <input type="hidden" name='brandId' id='departmentId'></input>
                            <TextField name="departmentName" id="departmentName" label="Department Name" />
                            <TextAreaField name="departmentDescription" id="departmentDescription" label="Department Description" 
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

export default memo(AddEditDepartment);