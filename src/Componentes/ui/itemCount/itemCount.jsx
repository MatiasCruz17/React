import { useState, useEffect } from "react";

const Cantidad = ({ stock = 10, inicial = 1, nombre, precio }) => {
    const [contador, setContador] = useState(inicial);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const decrementar = () => {
        if (contador > 1) setContador(contador - 1);
    };

    const incrementar = () => {
        if (contador < stock) setContador(contador + 1);
    };

    const agregarAlCarrito = () => {
        const nuevoProducto = {
            id: 1,
            nombre,
            cantidad: contador,
            precio,
        };
        setCarrito([...carrito, nuevoProducto]);
    };

    const manejarCantidad = (e) => {
        const valor = e.target.value;
        if (valor === "") {
            setContador(valor);
            return;
        }
    
        const numero = Number(valor);
    
        if (!isNaN(numero) && numero >= 1 && numero <= stock) {
            setContador(numero);}
    };

    return (
        <div>
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
            <button onClick={decrementar} disabled={contador <= 1}>-</button>
            <input type="number" value={contador || ""} onChange={manejarCantidad} />
            <button onClick={incrementar} disabled={contador >= stock}>+</button>
            <button onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
};

export default Cantidad;
