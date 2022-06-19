import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from './shared/Header';
import Footer from './shared/Footer';

class HomeManager extends React.Component {

    constructor(props) {
        super(props);
        this.state = {id : 0};
    };

    render() {
        return (
            <>
                <div className='container mt-3'>
                    <h4 className='bg-light p-2 rounded'>
                        Home Page
                    </h4>
                    <div className='row'>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header'>Brands</div>
                                <div className='card-body'>
                                    <p><strong>Total Brands:</strong></p>
                                    <p><strong>Total Active Brands:</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header'>Departments</div>
                                <div className='card-body'>
                                    <p><strong>Total Departments:</strong></p>
                                    <p><strong>Total Active Departments:</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header'>Products</div>
                                <div className='card-body'>
                                    <p><strong>Total Products:</strong></p>
                                    <p><strong>Total Active Products:</strong></p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3'>
                            <div className='card'>
                                <div className='card-header'>Brands</div>
                                <div className='card-body'>
                                    <p><strong>Total Brands:</strong></p>
                                    <p><strong>Total Active Brands:</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

export default HomeManager;