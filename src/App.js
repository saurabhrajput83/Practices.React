import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import HomeManager from './components/HomeManager';
import BrandManager from './components/brand/BrandManager';
import DepartmentManager from './components/department/DepartmentManager';
import ProductManager from './components/product/ProductManager';
import ShoppingCartManager from './components/shoppingcart/ShoppingCartManager';

function App() {
  return (
      <Router>
        <header>
          <Header></Header>
        </header>
        <main>
          <Routes>
            <Route path='/home' exact element={<HomeManager />} />
            <Route path='/brands' element={<BrandManager />} />
            <Route path='/departments' element={<DepartmentManager />} />
            <Route path='/products' element={<ProductManager />} />
            <Route path='/shoppingcart' element={<ShoppingCartManager />} />
            <Route path='/' exact redirectTo ="/home" />
          </Routes>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </Router>
  );
}

export default App;
