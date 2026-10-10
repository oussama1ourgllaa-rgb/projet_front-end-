import ProductCart from "./ProductCart";

const ProductList=({produits,dispatch})=>{
    return(
    <div className="container">
      <div className="row">
               {
              produits.map((p,pos)=><ProductCart key={pos} produit={p} dispatch={dispatch}/>)
               }
      </div>
    </div>

    )
}
export default ProductList;