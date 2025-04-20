import { useState, useEffect, useContext } from 'react'; 
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import Cantidad from '../ui/itemCount/itemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useContext (CartContext);

    useEffect (() => {
        const fetchProducto = async () => {
            try {
                const docRef = doc(db, "productos", itemId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setProduct({ id: docSnap.id, ...docSnap.data()});
                } else {
                    alert ("No existe el producto con ese ID");
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            }
        };

        fetchProducto();
    }, [itemId]);

    const handleAdd = (product, cantidad) => {
        const item = {
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
        };
        addToCart(item, cantidad);
    };

    if (!product) {
        return <p>Cargando detalle del producto...</p>;
    }

    return (
        <div className="detalle-producto">
        <h2>{product.nombre}</h2>
        <img src={product.imagen} alt={product.nombre} width="150" />
        <p>{product.descripcion}</p>
        <p>Precio: ${product.precio}</p>
        <Cantidad stock={product.stock || 10} inicial={1} nombre={product.nombre} precio={product.precio} onAdd={(cantidad) => handleAdd(product, cantidad)} />
    </div>
    );
};

export default ItemDetailContainer;
