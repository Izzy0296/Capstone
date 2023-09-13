import {createContext, useState} from "react";


const CartContext = createContext({

cart: [],


addCart: ()=>{}


})


function CartProvider({children}){

    const [cart, setCart] = useState([])

   function  addToCart(item){
    setCart([...cart, item])
   }
   return(
    < CartContext.Provider value={
        {cart, addToCart}
    
    }>
        {children}
    </CartContext.Provider>
   )

}


export {CartProvider, CartContext}