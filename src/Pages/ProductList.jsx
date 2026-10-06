import {Link} from "react-router-dom";

const ProductList=({products, dispatch})=>{

const handleDelete=(id)=>{
    dispatch({type:"DELETE_PRODUCT",payload:id});
}




    return(

        <>
        {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
         <div>
          <h2 className="fw-bold">Liste des produits</h2>
        </div>
        <Link  to="/products/add"   className="btn btn-primary">Ajouter </Link>
      </div>
       {/* Card */}
      <div className="card shadow-sm">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <strong>Produits</strong>
            <span className="badge text-bg-primary">
              {products.length}
            </span>
          </div>

        </div>
        <div className="card-body">

          {products.length === 0 ? ( <
                    div className="alert alert-info text-center mb-0">
                    Aucun produit disponible.
                    </div>) : (

            <div className="table-responsive">

              <table className="table table-hover">
                <thead className="table-dark">
                  <tr><th>ID</th><th>Nom</th><th>Catégorie</th><th>Prix</th><th>Stock</th><th>Actions</th></tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td className="fw-bold">
                        {product.name}
                      </td>
                      <td>
                        <span className="badge text-bg-info">
                          {product.category}
                        </span>
                      </td>
                      <td>
                        {product.price.toFixed(2)} DH
                      </td>
                      <td>
                        {product.stock}
                      </td>
                      <td>
                        <div className="d-flex gap-2">
                          <Link  to={`/products/edit/${product.id}`} className="btn btn-warning btn-sm">
                            Modifier
                          </Link>
                          <button className="btn btn-danger btn-sm" onClick={() =>handleDelete(product.id)}>
                            Supprimer
                          </button>

                        </div>
                      </td>
                    </tr>

                  ))}

                </tbody>

              </table>

            </div>
                    )}
                    </div>
                    </div> 
        
        </>
    );}

export default ProductList;














