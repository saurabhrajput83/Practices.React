import React from 'react';
import Brands from './Brands';
import AddEditBrand from './AddEditBrand';
import * as brandService from '../../services/BrandService';

class BrandManagerClass extends React.Component {

    defaultBrand = {
        brandId: 0,
        brandName: '',
        brandDescription: '',
        isActive: false
    };

    constructor(props){
        console.log("BrandManager constructor");
        super(props);
        this.state= {
            brand:this.defaultBrand,
            brands:[]
        };
    };
    
    componentDidMount(){
        console.log("BrandManager componentDidMount");
        this.loadBrands();
        
    };

    componentDidUpdate(){
        console.log("BrandManager componentDidUpdate");
    };

    componentWillUnmount(){
        console.log("BrandManager componentWillUnmount");
    };

    loadBrands = () => {
        console.log("BrandManager loadBrands");
        
        brandService
        .getAllBrands()
        .then((response)=> response.json())
        .then((data)=> {
            console.log("BrandManager loadBrands data", data)
            this.setState({brands:data});
        })
        .catch((error)=>console.log(error));
    };
   
    addBrand = (event)=> {
        //brandId
        console.log("BrandManager addBrand", event);
        this.setState({brand: this.defaultBrand});
        document.getElementById("divAddEditBrandModalOpen").click();
        
    };

    editBrand = (event)=> {
        //brandId
        console.log("BrandManager editBrand", event);
        let brandId = parseInt(event.target.id);
        brandService
        .getBrandById(brandId)
        .then((response)=>response.json())
        .then((data)=> {
            this.setState({brand : data});
            document.getElementById("divAddEditBrandModalOpen").click();
        });
    };

    deleteBrand = (event)=> {
        //brandId
        console.log("BrandManager deleteBrand", event);
        let brandId = parseInt(event.target.id);
        brandService
        .deleteBrand(brandId)
        .then((response)=> {
            this.loadBrands();
        })
        .catch((error)=> console.log(error));
    };

    createUpdateBrand = (event, values)=> {
        console.log("BrandManager createUpdateBrand", event, values);
        if(values.brandId > 0) {
            brandService
            .updateBrand(values)
            .then((response)=> {
                this.loadBrands();
                document.getElementById("divAddEditBrandModalClose").click();   
            })
            .catch((error)=> console.log(error));
        } else {
            brandService
            .addBrand(values)
            .then((response)=> {
                this.loadBrands();
                document.getElementById("divAddEditBrandModalClose").click();   
            })
            .catch((error)=> console.log(error));
        }
    };

    render() {
        return (
            <>
                <div className='container mt-3'>
                    <h4 className='bg-light p-2 rounded'>
                        Brands
                    </h4>
                    <p>
                        <button type="button" className='btn btn-primary' onClick={this.addBrand}>Add New Brand</button>
                        <button type="button" className='btn btn-primary invisible' id='divAddEditBrandModalOpen' data-bs-toggle="modal" data-bs-target="#divAddEditBrandModal">Add New Brand</button>
                    </p>
                    <Brands brands={this.state.brands} editBrand={this.editBrand} deleteBrand={this.deleteBrand} />
                </div>
                <div className="modal fade" id="divAddEditBrandModal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                Add/Edit Brand
                            </div>
                            <div className="modal-body">
                                <AddEditBrand values={this.state.brand} createUpdateHandler={this.createUpdateBrand}/>
                            </div>
                            <div className="modal-footer">
                                <button id="divAddEditBrandModalClose" type="button" className="btn-close" data-bs-dismiss="modal"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

};

export default BrandManagerClass;