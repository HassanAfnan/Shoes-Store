import React from 'react';
import PersistentDrawerLeft from './components/Drawer';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import  { Cart } from  './components/Cart';
import { Contact } from './components/Contact';
import { Product } from './components/Product';
import { ProductDetails } from './components/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <PersistentDrawerLeft/>
      <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/:ProductID' element={<ProductDetails/>}></Route>
          <Route path='about' element={<About/>}></Route>
          <Route path='cart' element={<Cart/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          <Route path='product' element={<Product/>}></Route>
          <Route path='product/:ProductID' element={<ProductDetails/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
