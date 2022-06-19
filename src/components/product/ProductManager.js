import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Products from './Products';
import AddEditProduct from './AddEditProduct';
import * as brandService from '../../services/BrandService';
import * as departmentService from '../../services/DepartmentService';
import * as lineItemService from '../../services/LineItemService';
import * as productService from '../../services/ProductService';
import * as shoppingCartService from '../../services/ShoppingCartService';

function ProductManager (props) {

    console.log("ProductManager init");
    
    const navigate = useNavigate();

    const defaultProduct = {
        productId: 0,
        productName: '',
        productDescription: '',
        isActive: false,
        listPrice: '',
        sellingPrice: '',
        quantity: '',
        productImageUrl: '',
        productUrl: '',
        brandId: '',
        departmentId: ''
    };

    const [brands, setBrands] = useState([]);
    const [departments, setDepartments] = useState([]);
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(defaultProduct);

  
    useEffect(()=> {
        console.log("ProductManager useEffect");
        loadBrands();
        loadDepartments();
        loadProducts();
    }, []);

    const loadProducts = () => {
        console.log("ProductManager loadProducts");
        
        productService
        .getAllProducts()
        .then((response)=> response.json())
        .then((data)=> {
            console.log("ProductManager loadProducts data", data)
            setProducts(data)
        })
        .catch((error)=>console.log(error));
    };

    const loadBrands = () => {
        console.log("ProductManager loadBrands");
        
        brandService
        .getAllBrands()
        .then((response)=> response.json())
        .then((data)=> {
            console.log("ProductManager loadBrands data", data);
            let brandValues = [{value: '', text: '--Select--'}];
            for(let i=0; i< data.length; i++){
                console.log("brand", data[i]);
                brandValues.push({id: data[i].brandId, value: data[i].brandId, text: data[i].brandName});
            }
            setBrands(brandValues);
        })
        .catch((error)=>console.log(error));
    };
   
    const loadDepartments = () => {
        console.log("ProductManager loadDepartments");
        
        departmentService
        .getAllDepartments()
        .then((response)=> response.json())
        .then((data)=> {
            console.log("ProductManager loadDepartments data", data);
            let departmentValues = [{value: '', text: '--Select--'}];;
            for(let i=0; i< data.length; i++){
                console.log("department", data[i]);
                departmentValues.push({id: data[i].departmentId, value: data[i].departmentId, text: data[i].departmentName});
            }
            setDepartments(departmentValues);
        })
        .catch((error)=>console.log(error));
    };

    const addProduct = (event)=> {

        console.log("ProductManager addProduct", event);
        setProduct(defaultProduct);
        document.getElementById("divAddEditProductModalOpen").click();
        
    };

    const editProduct = (event)=> {

        console.log("ProductManager editProduct", event);
        let productId = parseInt(event.target.id);
        productService
        .getProductById(productId)
        .then((response)=>response.json())
        .then((data)=> {
            setProduct(data);
            document.getElementById("divAddEditProductModalOpen").click();
        });
    };

    const deleteProduct = (event)=> {

        console.log("ProductManager deleteProduct", event);
        let productId = parseInt(event.target.id);
        productService
        .deleteProduct(productId)
        .then((response)=> {
            loadProducts();
        })
        .catch((error)=> console.log(error));
    };

    const createUpdateProduct = (event, values)=> {
        console.log("ProductManager createUpdateProduct", event, values);
        if(values.productId > 0) {
            productService
            .updateProduct(values)
            .then((response)=> {
                loadProducts();
                document.getElementById("divAddEditProductModalOpen").click();   
            })
            .catch((error)=> console.log(error));
        } else {
            productService
            .addProduct(values)
            .then((response)=> {
                loadProducts();
                document.getElementById("divAddEditProductModalOpen").click();   
            })
            .catch((error)=> console.log(error));
        }
    };

    const buyProduct = (event) =>{
        
        let productId =  parseInt(event.target.id);
        let shoppingCartId = 0;
        if(localStorage.getItem("shoppingCartId"))
            shoppingCartId = parseInt(localStorage.getItem("shoppingCartId"));
        
        console.log("ProductManager buyProduct", productId, shoppingCartId);

        if(shoppingCartId>0){
            addlineItem(productId, shoppingCartId);
        } else {
            shoppingCartService
            .addShoppingCart({shoppingCartId: shoppingCartId})
            .then((response)=>response.json())
            .then((data)=>{
                console.log("buyProduct", data);
                shoppingCartId =  data.shoppingCartId;
                localStorage.setItem("shoppingCartId", shoppingCartId);
                addlineItem(productId, shoppingCartId);
            })
            .catch((error)=> console.log(error));
        }
    };

    const addlineItem = (productId, shoppingCartId) => {
        let lineItemModel = {
            productId: productId, 
            shoppingCartId: shoppingCartId, 
            quantity: 1
        };


        lineItemService
        .addLineItem(lineItemModel)
        .then((response)=>response.json())
        .then((data)=>{
            console.log("addlineItem", data);
            navigate('/shoppingcart')
        })
        .catch((error)=> console.log(error));
    };

    return (
        <>
            <div className='container mt-3'>
                <h4 className='bg-light p-2 rounded'>
                    Products
                </h4>
                <p>
                    <button type="button" className='btn btn-primary' onClick={addProduct}>Add New Product</button>
                    <button type="button" className='btn btn-primary invisible' id='divAddEditProductModalOpen' data-bs-toggle="modal" data-bs-target="#divAddEditProductModal">Add New Product</button>
                </p>
                <Products products={products} editProduct={editProduct} deleteProduct={deleteProduct}
                    buyProduct={buyProduct} />
            </div>
            <div className="modal fade" id="divAddEditProductModal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            Add/Edit Product
                        </div>
                        <div className="modal-body">
                            <AddEditProduct 
                            values={product}
                            brands= {brands}
                            departments= {departments}
                            createUpdateHandler={createUpdateProduct}/>
                        </div>
                        <div className="modal-footer">
                            <button id="divAddEditProductModalClose" type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
    

};

export default ProductManager;