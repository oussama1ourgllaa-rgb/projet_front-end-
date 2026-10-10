import { useState,useReducer,useEffect } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import axios from 'axios';

import ProductList from './Components.2/ProductList';
import Cart from './Components.2/Cart';
import Navbar from './Pages.2/Navbar';

import {initialState,CartReducer} from './CartReducer';

function App() {
  const[produits,setProduits]=useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3007/produits').then(response=>
      setProduits(response.data)
    )
  },
  []);

   const [state,dispatch]=useReducer(CartReducer,initialState);
  return (
      <BrowserRouter>
        <Navbar productsCart={state.cart}/>
        <Routes>
           <Route path="/" element={<ProductList dispatch={dispatch} produits={produits}/>}/>
           <Route path="/products" element={<ProductList dispatch={dispatch} produits={produits}/>}/> 
           <Route path="/cart" element={<Cart dispatch={dispatch} productsCart={state.cart}/>}/>  
        </Routes>   
      </BrowserRouter> 
      
  )
}

export default App
