import logo from './logo.svg';
import './App.css';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import HomeManager from './components/HomeManager';
import BrandManager from './components/brand/BrandManager';
import AddEditBrandManager from './components/brand/AddEditBrandManager';
import DepartmentManager from './components/department/DepartmentManager';
import AddEditDepartmentManager from './components/department/AddEditDepartmentManager';
import ProductManager from './components/product/ProductManager';
import AddEditProductManager from './components/product/AddEditProductManager';
import ShoppingCartManager from './components/shoppingcart/ShoppingCartManager';
import React from 'react';

function App() {
  const navigation = new useNavigate();
  return (
      <React.Fragment>
        <header>
          <Header></Header>
        </header>
        <main>
          <Routes>
            <Route path='/home' exact element={<HomeManager />} />
            <Route path='/brands' element={<BrandManager navigation={navigation} />} />
            <Route path='/editbrand' element={<AddEditBrandManager navigation={navigation} />} />
            <Route path='/addbrand' element={<AddEditBrandManager navigation={navigation} />} />
            <Route path='/departments' element={<DepartmentManager navigation={navigation} />} />
            <Route path='/editdepartment' element={<AddEditDepartmentManager navigation={navigation} />} />
            <Route path='/adddepartment' element={<AddEditDepartmentManager navigation={navigation} />} />
            <Route path='/products' element={<ProductManager navigation={navigation} />} />
            <Route path='/editproduct' element={<AddEditProductManager navigation={navigation} />} />
            <Route path='/addproduct' element={<AddEditProductManager navigation={navigation} />} />
            <Route path='/shoppingcart' element={<ShoppingCartManager />} />
            <Route path='/' exact redirectTo ="/home" />
          </Routes>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </React.Fragment>
  );
}

export default App;
