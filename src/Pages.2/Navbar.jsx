import { Link } from 'react-router-dom';

const Navbar = ({productsCart}) => {
  return (
    <nav className="navbar bg-dark navbar-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          My Shop
        </Link>

        <div className="navbar-nav d-flex flex-row">

          <Link className="nav-link mx-2" to="/products">
            Produits
          </Link>

          <Link className="nav-link me-3 position-relative" to="/cart">
            Cart
            <span className="badge bg-danger position-absolute top-0"> {productsCart.length} </span>
          </Link>

        </div>

      </div>
    </nav>
  );
};
export default Navbar;
