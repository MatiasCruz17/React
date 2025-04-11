import { useState, useEffect, useContext } from 'react'; 
import { useParams } from 'react-router-dom';
import Cantidad from '../ui/itemCount/itemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext (CartContext);

    useEffect(() => {
        let url = `https://fakestoreapi.com/products/${itemId}`;

        fetch(url)
            .then((res) =>res.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error al obtener el producto", error));
    }, [itemId])

    const handleAdd = (product, cantidad) => {
        const item = {
            id: product.id,
            nombre: product.title,
            precio: product.price,
        };
        addToCart(item, cantidad);
    };

    if (!product) {
        return <p>Cargando detalle del producto...</p>;
    }

    return (
        <div>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} width="150" />
        <p>{product.description}</p>
        <p>Precio: ${product.price}</p>
        <Cantidad stock={10} inicial={1} nombre={product.title} precio={product.price} onAdd={(cantidad) => handleAdd(product, cantidad)} />
    </div>
    );
};

export default ItemDetailContainer;
