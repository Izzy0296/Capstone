import Nav from "../components/NavBar";
import { useContext } from "react";
import { CartContext } from "../cartcontext";
import { useNavigate } from "react-router-dom";
import { CartItem } from "../components/CartItem";




function Cart() {
    const {cart, removeFromCart, updateQuantity, cartTotal, login} = useContext(CartContext);
    const navigate = useNavigate()
    

    

    return (
        <div>
            {cart.map((shopping,index) => {
                return (
                   <CartItem shopping= {shopping} index={index}/>
                )
            })}
           {login?  <button onClick={() => navigate('/checkout')}>checkout</button>:""}
        </div>

    )
}





export default Cart;




