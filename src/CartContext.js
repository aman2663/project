import { createContext, useState } from "react";


export const CartContext = createContext();

const CartContextProvider = ({children})=>{
    const [cart, setCart] = useState([]);
    const [wish,setWish]=useState([]);
    function addToCart(item){
        setCart([...cart,item])
    }
    function removeFromCart(item){
        setCart(cart.filter((c)=>c.id!==item.id))
    }

    function addToWishlist(item){
        setWish([...wish,item])
    }
    function removeFromWishlist(item){
        setWish(wish.filter((c)=>c.id!==item.id))
    }

    const values = {
        cart,addToCart,removeFromCart,wish,addToWishlist,removeFromWishlist
    }

    return (<CartContext.Provider value={values}>{children}</CartContext.Provider>)
}

export default CartContextProvider;
