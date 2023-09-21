

    import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../cartcontext";

function Nav() {
  const { login, logoutFunc } = useContext(CartContext);

  return (
    <div className="topnav">
      <Link to="/products">
        <a>Home</a>
      </Link>
      {login ? (
        <>
          <Link to="/shoppingcart">
            <a>Cart</a>
          </Link>
          <a onClick={logoutFunc}>Logout</a>
        </>
      ) : (
        <Link to="/">
          <a>Login</a>
        </Link>
      )}
    </div>
  );
}

export default Nav;


