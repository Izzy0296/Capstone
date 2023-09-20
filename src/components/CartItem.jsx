import { useContext } from 'react';
import { CartContext } from '../cartcontext';
import { useNavigate } from 'react-router-dom';

export const CartItem = ({ shopping, index }) => {
    const {cart, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext);
    const navigate = useNavigate()
  
    const { image, title, price, quantity } = shopping


    return (

        <div>CartItem

            <div>
                <img className="image3" src={image} />
                <p key={title}>{title} </p>
                <p key={price}>${price} </p>
                <p>Quantity: {quantity}</p>
                <button onClick={() => updateQuantity(index, quantity + 1)}>
                    +
                </button>
                <button onClick={() => updateQuantity( index, quantity - 1)}>
                    -
                </button>

                <button onClick={() => removeFromCart(shopping, index)}>{index}Delete</button>

               


                <div>
                    <p>Total: ${cartTotal.toFixed(2)}</p>
                </div>


            </div>
        </div>
    )
}
