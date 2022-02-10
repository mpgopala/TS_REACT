import React from "react";
import cartReducer from "../reducer/cart_reducer";
import { ProductContext } from "./ProductContext";

const initialState = {
    products:[],
    total: 0
}

export const CartContext = React.createContext();

export const CartProvider = (props) => {
    let [state, dispatch] = React.useReducer(cartReducer, initialState);
    let {products} = React.useContext(ProductContext);

    function addToCart(id) {
        let prd = products.filter(p => p.id === id)[0];
        dispatch({type:'ADD_TO_CART', payload :prd})
    }

    function increment(id) {
        dispatch({type:'INCREMENT', payload:id})
    }
    return <CartContext.Provider value={{cart:state.products, addToCart:addToCart, increment:increment}}>
        {props.children}
    </CartContext.Provider>
}

