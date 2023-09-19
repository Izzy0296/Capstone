import Nav from "../components/NavBar";
import { useContext } from "react";
import { CartContext } from "../cartcontext";


function Cart() {
    const {cart, removeFromCart, updateQuantity} = useContext(CartContext);
    
    console.log(cart)

    

    return (
        <div>
            {cart.map((shopping) => {
                return (
                    <div>
                    <img className = "image3" src = {shopping.image}  />
                    <p key={shopping.title}>{shopping.title} </p>
                    <p key={shopping.price}>${shopping.price} </p>
                    <p>Quantity: {shopping.quantity}</p>
                    <button onClick={() => updateQuantity(shopping, shopping.quantity + 1)}>
                        +
                    </button>
                     <button onClick={() => updateQuantity(shopping, shopping.quantity - 1)}>
                        -
                    </button>
                   
                    <button onClick={() => removeFromCart(shopping)}>Delete</button>
                
                
                    

                    </div>
                )
            })}
        </div>

    )
}



































export default Cart;