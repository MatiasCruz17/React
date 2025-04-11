import { createContext, useState } from "react";

export const CartContext = createContext(); 

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (Item, quantity) => {
        const existingItem = cart.find(prod => prod.id === Item.id);

        if (existingItem){
            const updateCart = cart.map (prod =>
                prod.id === Item.id ? { ...prod, quantity: prod.quantity + quantity} : prod
            );
            setCart(updateCart);
        } else {
            setCart([...cart, { ...Item, quantity}]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(Item => Item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalQuantity = cart.length;
    
    const total = cart.reduce((acc, Item)=> acc + Item.quantity * Number(Item.precio), 0);

    return (
        <CartContext.Provider value = {{cart, addToCart, removeItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    );
};