import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../cartcontext";

function Nav() {
    const { login, logoutFunc } = useContext(CartContext);

    return (
        <div className="topnav">
           
            <Link to='/products'> <a>Home</a></Link>
            {login ?  (<span onClick={logoutFunc}>Logout</span> ): <Link to='/'> <a>Login</a></Link>}
            <Link to='/shoppingcart'> <a>Cart</a></Link>

        </div>
    )

}

export default Nav;