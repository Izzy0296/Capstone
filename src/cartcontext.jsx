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
           
                    import React, { createContext, useState, useMemo } from "react";


                    export const CartContext = createContext()
                    
                    const CartProvider = ({ children }) => {
                        const [cart, setCart] = useState([])
                        const [login, setLogin]= useState(false)


                        function loginFunc(token){
                            token?setLogin(true):setLogin(false)
                        }
                        function logoutFunc() {
                            setLogin(false)
                        }
                    
                    
                       const addToCart = (info) => {
                        setCart([...cart, { ...info, quantity: 1 }]);
                      };
                    
                        //remove from cart
                        const removeFromCart = (info, index) => {
                            const updatedCart = cart.filter((item, i) => i !== index);
                            
                            setCart(updatedCart);
                          };
                    
                          //Update item quantity in cart
                          const updateQuantity = (info, newQuantity) => {
                            const updatedCart = cart.map((item, i) => {
                              if (i === info) {
                                return { ...item, quantity: newQuantity };
                              }
                              return item;
                            });
                            setCart(updatedCart);
                          };
                    
                          //calculate the cart total
                          const cartTotal = useMemo(() => {
                            return cart.reduce((total, item) => total + item.price * item.quantity, 0);
                          }, [cart]);


            
                        
                        return <CartContext.Provider value={{ addToCart, removeFromCart, updateQuantity, cart, cartTotal, login, loginFunc, logoutFunc}}>
                            {children}
                        </CartContext.Provider>
                    
                    }
                    
                    
                    
                    
                    
                    export default CartProvider;
                    