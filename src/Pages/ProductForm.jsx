import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
//useNavigate => Location.href version react
//useParams =>to get values from URL

const FormProduct = ({ products, dispatch }) => { 

    //get value of variable id from url if exists
  // id type is string, so we need to convert it to number when comparing with product.id using === operator
  const { id } = useParams();//id est de type string
  const navigate = useNavigate();

  //const isEdit = id!==undefined? true : false;
  const isEdit=Boolean(id);

  // Produit à modifier
  const productToEdit = products.find((product) => product.id === Number(id)
  );
   console.log(productToEdit);
  // Valeurs initiales
  const [formData, setFormData] = useState({ name: productToEdit? productToEdit.name : "",price: productToEdit?.price || "",category: productToEdit?.category || "",stock: productToEdit?.stock || "",
  });

  const [errors, setErrors] = useState({});

  // Gérer l'événement change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value, //modifier uniquement la valeur de la clé dont le nom est la valur de la variable name
    });
  };

  // Validation du formulaire
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name =
        "Le nom du produit est obligatoire.";
    }

    if (
      formData.price === "" ||
      Number(formData.price) <= 0
    ) {
      newErrors.price =
        "Le prix doit être supérieur à 0.";
    }

    if (!formData.category) {
      newErrors.category =
        "La catégorie est obligatoire.";
    }

    if (
      formData.stock === "" ||
      Number(formData.stock) < 0
    ) {
      newErrors.stock =
        "Le stock doit être supérieur ou égal à 0.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Gérer l'événement submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()===false) {
      return;
    }

    const product = {
      name: formData.name.trim(),
      price: Number(formData.price),
      category: formData.category,
      stock: Number(formData.stock),
    };

    // Modifier ou ajouter le produit
    if(isEdit===true){
        let newVP={...product,id:Number(id)};
      dispatch({
        type: "UPDATE_PRODUCT",
        payload: newVP,
      });
    }else{
       let newVP={...product};
      dispatch({type:"ADD",payload:newVP});
    }

    navigate("/products"); //Location.href="/products"
  };

  return (
    <div className="container w-75 my-5 mx-auto">
      <div className="card">
        <div className="card-body p-4">

          <h2 className="fw-bold mb-4">
            {isEdit
              ? "Modifier le produit"
              : "Ajouter un produit"}
          </h2>

          <form onSubmit={handleSubmit}>

            {/* NOM */}
            <div className="mb-3">
              <label className="form-label">
                Nom du produit
              </label>

              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
              />

              {errors.name? (
                <div className="text-danger">
                  {errors.name}
                </div>
              ):""}
            </div>

            {/* PRIX */}
            <div className="mb-3">
              <label className="form-label">
                Prix
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                step="0.01"
                className="form-control"
              />

              {errors.price && (
                <div className="text-danger">
                  {errors.price}
                </div>
              )}
            </div>

            {/* CATEGORIE */}
            <div className="mb-3">
              <label className="form-label">
                Catégorie
              </label>

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-select"
              >
                <option value="">
                  -- Sélectionner --
                </option>

                <option value="Informatique">
                  Informatique
                </option>

                <option value="Téléphone">
                  Téléphone
                </option>

                <option value="Audio">
                  Audio
                </option>

                <option value="Accessoire">
                  Accessoire
                </option>
              </select>

              {errors.category && (
                <div className="text-danger">
                  {errors.category}
                </div>
              )}
            </div>

            {/* STOCK */}
            <div className="mb-4">
              <label className="form-label">
                Stock
              </label>

              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                className="form-control"
              />

              {errors.stock && (
                <div className="text-danger">
                  {errors.stock}
                </div>
              )}
            </div>

            {/* BUTTONS */}
            <div className="d-flex gap-2">

              <button
                type="submit"
                className="btn btn-primary"
              >
                {isEdit ? "Enregistrer" : "Ajouter"}
              </button>

              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => navigate("/products")}
              >
                Annuler
              </button>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default FormProduct;






