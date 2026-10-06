import { useReducer } from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductList from "./Pages/ProductList";
import ProductForm from "./Pages/ProductForm";
// Liste initiale des produits
const products = [
  {
    id: 1,
    name: "Laptop HP",
    price: 7500,
    category: "Informatique",
    stock: 10,
  },
  {
    id: 2,
    name: "iPhone 15",
    price: 9500,
    category: "Téléphone",
    stock: 5,
  },
  {
    id: 3,
    name: "Casque Sony",
    price: 1200,
    category: "Audio",
    stock: 15,
  },
];
  const initialState = {products:products};
  // Reducer
const productReducer = (state, action) => {//action = {type: , payload: }
  switch (action.type) {
    // Ajouter un produit
    case "ADD":
       console.log(action.payload);

      const newState={...state,products:[...state.products,{...action.payload,id:Date.now()}]};
      console.log('new State: => ',newState);
      return newState;
      

    // Modifier un produit
    case "UPDATE_PRODUCT":
       let copy=[...state.products];
      const newProd =copy.map(p=>p.id===action.payload.id?action.payload:p);
      return {...state,products:newProd};
     /* return {...state,products: state.products.map((product) => product.id === action.payload.id? action.payload: product)};*/

    // Supprimer un produit
    case "DELETE_PRODUCT":
      copy=[...state.products];
      let filtredCopy=copy.filter(p=>p.id!==action.payload);
      return {...state,products:filtredCopy}
     /* return {...state,products: state.products.filter(
        (product) => product.id !== action.payload)};  */

    default:
      return state;
  }
}

const App = () => {
  // State + dispatch
  const [state, dispatch] = useReducer( productReducer,initialState);


  return (
    <BrowserRouter>
      <Navbar />

      
        <Routes>

          {/* Liste des produits */}
          <Route
            path="/"
            element={
              <ProductList products={state.products} dispatch={dispatch}
              />
            }
          />

          {/* Liste des produits */}
          <Route
            path="/products"
            element={
              <ProductList  products={state.products} dispatch={dispatch}
              />
            }
          />

          {/* Ajouter un produit */}
          <Route
            path="/products/add"
            element={
              <ProductForm
                products={products}
                dispatch={dispatch}
              />
            }
          />

          {/* Modifier un produit */}
          <Route
            path="/products/edit/:id"
            element={
              <ProductForm
                products={products}
                dispatch={dispatch}
              />
            }
          />

        </Routes>
      
    </BrowserRouter>
  );
}

export default App;