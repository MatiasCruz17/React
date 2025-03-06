import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
import Cantidad from '../ui/itemCount/itemCount';

const ItemDetailContainer = () => {
    const { itemId } = useParams();  // Obtener el ID del producto desde la URL
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const url = `https://fakestoreapi.com/products/${itemId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error al obtener el producto:', error));
    }, [itemId]);

    if (!product) {
        return <p>Cargando detalle del producto...</p>;
    }

    return (
        <div>
            <h2>Detalle del Producto</h2>
            <p>ID del producto: {product.id}</p>
            <p>Nombre: {product.title}</p>
            <p>Precio: ${product.price}</p>
            <img src={product.image} alt={product.title} width="150" />

            <Cantidad stock={10} inicial={1} nombre={product.title} precio={product.price} />
        </div>
    );
};

export default ItemDetailContainer;
