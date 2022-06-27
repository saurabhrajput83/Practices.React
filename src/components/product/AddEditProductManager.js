import React, {useEffect} from 'react';
import {bindActionCreators} from 'redux';
import {useSearchParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import TextField from '../shared/TextField'; 
import TextAreaField from '../shared/TextAreaField'; 
import CheckBoxField from '../shared/CheckBoxField';
import SelectField from '../shared/SelectField';
import * as brandActionCreators from '../../state-redux/actionCreators/brandActionCreators';
import * as departmentActionCreators from '../../state-redux/actionCreators/departmentActionCreators';
import  * as productActionCreators from '../../state-redux/actionCreators/productActionCreators';

function AddEditProductManager(props) {

    const [searchParams, setSearchParams] = useSearchParams();
    const appStore = useSelector((appStore)=> appStore);
    
    const brandStore = appStore.brand;
    const departmentStore = appStore.department;
    const productStore = appStore.product;
   
    const dispatch = useDispatch();
    
    let {getAllBrandsActionCreator} = bindActionCreators(brandActionCreators, dispatch);
    let {getAllDepartmentsActionCreator} = bindActionCreators(departmentActionCreators, dispatch);
    let {addProductActionCreator, getProductByIdActionCreator, updateProductActionCreator} = 
    bindActionCreators(productActionCreators, dispatch);
    let initialValues = productStore.product;

    console.log("AddEditProductManager Component init", props, appStore);

    useEffect(()=>{
        console.log("AddEditProductManager Component useEffect");
        getAllBrandsActionCreator();
        getAllDepartmentsActionCreator();
        if(searchParams.get('id')) {
            getProductByIdActionCreator(searchParams.get('id'));
        } 
    },[]);
     
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
        console.log("AddEditProductManager submitHandler", values, event);

        if(values.brandId > 0) {
            updateProductActionCreator(values, redirect);
        } else {
            addProductActionCreator(values, redirect);
        }
    };

    const redirect = () => {
        props.navigation('/products');
    };

    const prepareSelectListForBrands = (brands)=> {
        //departmentId
        let selectList = [{value: '', text: '--Select--'}];;
        for(let i=0; i< brands.length; i++){
            let item = brands[i];
            selectList.push({id: item.brandId, value: item.brandId, text: item.brandName});
        }
       return selectList;
        
    };

    const prepareSelectListForDepartments = (departments)=> {
        //departmentId
        let selectList = [{value: '', text: '--Select--'}];;
        for(let i=0; i< departments.length; i++){
            let item = departments[i];
            selectList.push({id: item.departmentId, value: item.departmentId, text: item.departmentName});
        }
        return selectList;
    };

    return (
        <>
            <div className='container mt-3'>
                    <h4 className='bg-light p-2 rounded'>
                        Add/Edit Product
                    </h4>
                    <p>
                        <button type="button" className='btn btn-primary' onClick={redirect}>
                            Return to Products</button>
                    </p>
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
                                    <TextAreaField name="productDescription" id="productDescription" 
                                    label="Product Description" rows="5" />
                                    <CheckBoxField name="isActive" id="isActive" label="Is Active" />
                                    <TextField name="listPrice" id="listPrice" label="List Price" />
                                    <TextField name="sellingPrice" id="sellingPrice" label="Selling Price" />
                                    <TextField name="quantity" id="quantity" label="Quantity" />
                                    <TextField name="productImageUrl" id="productImageUrl" label="Product Image Url" />
                                    <TextField name="productUrl" id="productUrl" label="Product Url" />
                                    <SelectField name="brandId" id="brandId" label="Brand" 
                                    values={brandStore.brands && brandStore.brands.length >0 ?  
                                        prepareSelectListForBrands(brandStore.brands) : []} />
                                    <SelectField name="departmentId" id="departmentId" label="Department" 
                                    values={departmentStore.departments && departmentStore.departments.length > 0 ?  
                                        prepareSelectListForDepartments(departmentStore.departments) : []} />
                                    <div className="form-group mt-3">
                                        <button className='btn btn-dark' type='submit'>Submit</button>
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

export default AddEditProductManager;