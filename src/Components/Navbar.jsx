import {NavLink} from "react-router-dom";
const Navbar=()=>{
return(
 <nav className="navbar navbar-dark bg-dark">
      <div className="container">

        <ul className="navbar-nav flex-row gap-4 ms-auto">

          <li className="nav-item">
            <NavLink
              to="/products"
              className="nav-link"
            >
              Produits
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/products/add"
              className="nav-link"
            >
              Ajouter
            </NavLink>
          </li>

        </ul>

      </div>
    </nav>

);

}
export default Navbar;



