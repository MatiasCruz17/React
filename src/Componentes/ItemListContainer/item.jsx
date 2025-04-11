import {Link} from "react-router-dom";

const Item = ({producto}) => {
    return (
        <div className="item-card">
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre} width="150" />
            <p>Precio: ${producto.precio}</p>
            <Link to={`/item/${producto.id}`}>Ver detalle</Link>
        </div>
    );
};

export default Item;
