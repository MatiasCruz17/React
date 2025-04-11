import { useState } from "react";

const Cantidad = ({ stock = 10, inicial = 1, nombre, precio, onAdd }) => {
    const [contador, setContador] = useState(inicial);

    const decrementar = () => {
        if (contador > 1) setContador(contador - 1);
    };

    const incrementar = () => {
        if (contador < stock) setContador(contador + 1);
    };

    const manejarCantidad = (e) => {
        const valor = e.target.value;
        if (valor === "") {
            setContador("");
            return;
        }
    
        const numero = Number(valor);
    
        if (!isNaN(numero) && numero >= 1 && numero <= stock) {
            setContador(numero);}
    };

    const handleAgregar = () =>{
        const cantidadValida = Number(contador);
        if (onAdd && cantidadValida >= 1 && cantidadValida <= stock){
            onAdd(cantidadValida);
            setContador(inicial);
        }
    };

    return (
        <div>
            <h2>{nombre}</h2>
            <p>Precio: ${precio}</p>
            <button onClick={decrementar} disabled={contador <= 1}>-</button>
            <input type="number" value={contador || ""} onChange={manejarCantidad} min = "1" max={stock} />
            <button onClick={incrementar} disabled={contador >= stock}>+</button>
            <button onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    );
};

export default Cantidad;
