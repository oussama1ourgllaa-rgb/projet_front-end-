const ProductCart=({produit,dispatch})=>{
        return (
            <div className="col-md-4">
               <div className="card h-100">
                 <img src={produit.image} className="card-img-top" alt={produit.nom} style={{objectFit:"contain",height:"220px"}}/>
                   <div className="card-body d-flex flex-column">
                       <h4 className="card-title">{produit.nom}</h4>
                       <p className="d-flex justify-content-between">
                        <span className="badge bg-success">{produit.prix}</span>
                        <span className="badge bg-info">{produit.category}</span>
                       </p>
                        <button type="button" onClick={()=>dispatch({type:"ADD_TO_CART",payload:produit})}  className="btn btn-primary btn-sm">Add To CART</button>

                   </div>
               </div>
            </div>
        )

}
export default ProductCart;