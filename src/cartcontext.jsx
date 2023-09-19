//import {createContext, useState} from "react";



//const CartContext = createContext({
    
    //cart: [],
    
    
    //addCart: ()=>{}
    
    
    //})
    
    
    //function CartProvider({children}){
        
        // const [cart, setCart] = useState([])
        
        //function  addToCart(item){
            // setCart([...cart, item])
            //}
            //return(
                // < CartContext.Provider value={
                    //    {cart, addToCart}
                    
                    //}>
                    // {children}
                    // </CartContext.Provider>
                    // )
                    
                    //}
                    
                    
                    //export {CartProvider, CartContext}
 import React, { createContext, useState } from "react";

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    // add to cart
    //const addToCart = (info) => {
     //   setCart([...cart, info])

   // }
   const addToCart = (info) => {
    setCart([...cart, { ...info, quantity: 1 }]);
  };

    //remove from cart
    const removeFromCart = (info) => {
        const updatedCart = cart.filter((item) => item.id !== info.id);
        setCart(updatedCart);
      };

      //Update item quantity in cart
      const updateQuantity = (info, newQuantity) => {
        const updatedCart = cart.map((item) => {
          if (item.id === info.id) {
            return { ...item, quantity: newQuantity };
          }
          return item;
        });
        setCart(updatedCart);
      };


    
    return <CartContext.Provider value={{ addToCart, removeFromCart, updateQuantity, cart }}>
        {children}
    </CartContext.Provider>

}





export default CartProvider;







