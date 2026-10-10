




const Cart=({productsCart,dispatch})=>{
    return (
        <div className="container">
           <h2>Gérer mon Panier</h2>
           <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-sm btn-danger" onClick={()=>dispatch({type:"CLEAR_CART"})}>Clear Cart</button>
           </div>

           {productsCart.length===0?<p>Votre panier est vide ....!</p>:
           (
            <>
                <table className="table table-striped w-75 mx-auto">
                    <thead>
                        <tr><th>ID</th><th>Nom</th><th>categorie</th><th>qte</th><th>prix HT</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                       {    

                            productsCart.map((p,pos)=>
                             <tr key={pos}><td>#{p.id}</td><td>{p.nom}</td><td><span className="badge bg-warning">{p.category}</span></td>
                             
                             <td><button onClick={()=>dispatch({type:"INCREMENT_QTE",payload:p.id})}>+</button> {"  "} {p.qte} {"  "}<button onClick={()=>dispatch({type:"DECREMENT_QTE",payload:p.id})}>-</button></td>                  
                              <td>{p.prix*p.qte}</td><td> <button className="btn btn-danger btn-sm" onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload:p.id})}}>Remove</button></td></tr>
                                )
                       }



                    </tbody>




                </table>

                <div className="w-75 mx-auto d-flex justify-content-end">

                  {productsCart.reduce((acc, item) => acc + item.prix * item.qte, 0)} DH
                    </div>
           </>
           
                    )
           
           }








        </div>

    )




}



export default Cart;