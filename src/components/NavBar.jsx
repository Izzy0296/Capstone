import { Link } from "react-router-dom";

function Nav() {

    return (
        <div className="topnav">
            <Link to='/products'> <a>Home</a></Link>
            <Link to='/'> <a>Login</a></Link>
            <Link to='/shoppingcart'> <a>Cart</a></Link>

        </div>
    )

}

export default Nav;