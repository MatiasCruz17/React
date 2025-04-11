import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, removeItem, clearCart, total} = useContext(CartContext);

    if (cart.length === 0){
        return <h2>El carrito esta vacio</h2>;
    }

    return (
        <div>
            <h2>Carrito</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.nombre} - Cantidad: {item.quantity} - Precio unitario: ${item.precio} - Subtotal: ${(item.quantity * item.precio).toFixed(2)}
                        <button onClick={() => removeItem(item.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={clearCart}>Vaciar carrito</button>
        </div>
    );
};

export default Cart;