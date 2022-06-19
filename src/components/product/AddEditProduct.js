import React, {memo} from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextField from '../shared/TextField'; 
import TextAreaField from '../shared/TextAreaField'; 
import CheckBoxField from '../shared/CheckBoxField';
import SelectField from '../shared/SelectField';

function AddEditProduct(props) {

    console.log("AddEditProduct Component init", props);

    const initialValues = props.values;
    const brands = props.brands;
    const departments = props.departments;
    
    const addEditProductValidationSchema = Yup.object({
        productId: Yup.number(),
        productName: Yup.string().required("Required"),
        productDescription: Yup.string().required("Required"),
        isActive: Yup.boolean(),
        listPrice: Yup.string().required("Required"),
        sellingPrice: Yup.string().required("Required"),
        quantity: Yup.string().required("Required"),
        brandId: Yup.number().required("Required"),
        departmentId: Yup.number().required("Required")
    });

    const submitHandler = (values, event) => {
        console.log("AddEditProduct submitHandler", values, event);

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
                validationSchema={addEditProductValidationSchema}
                onSubmit={submitHandler}>
            {
                (formik)=> (
                    <div>
                        <Form id='formAddEditProduct'>
                            <input type="hidden" name='productId' id='productId'></input>
                            <TextField name="productName" id="productName" label="Product Name" />
                            <TextAreaField name="productDescription" id="productDescription" label="Product Description" 
                                 rows="5" />
                            <CheckBoxField name="isActive" id="isActive" label="Is Active" />
                            <TextField name="listPrice" id="listPrice" label="List Price" />
                            <TextField name="sellingPrice" id="sellingPrice" label="Selling Price" />
                            <TextField name="quantity" id="quantity" label="Quantity" />
                            <TextField name="productImageUrl" id="productImageUrl" label="Product Image Url" />
                            <TextField name="productUrl" id="productUrl" label="Product Url" />
                            <SelectField name="brandId" id="brandId" label="Brand" values={brands} />
                            <SelectField name="departmentId" id="departmentId" label="Department" values={departments} />
                            <div className="form-group mt-3">
                                <button className='btn btn-dark' type='submit'>Submit</button>
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

export default memo(AddEditProduct);