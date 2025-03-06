import { useState, useEffect } from 'react'; 
import { useParams, Link } from 'react-router-dom';
import Cantidad from '../ui/itemCount/itemCount';

const ItemListContainer = () => {
    const { categoriaId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        let url = 'https://fakestoreapi.com/products';

        if (categoriaId) {
            url = `https://fakestoreapi.com/products/category/${categoriaId}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error al obtener productos:', error));
    }, [categoriaId]);

    return (
        <div>
            <h2>Lista de Productos</h2>
            {products.length === 0 ? (
                <p>Cargando productos...</p>
            ) : (
                <ul>
                    {products.map((prod) => (
                        <li key={prod.id}>
                            <h3>{prod.title}</h3>
                            <p>Precio: ${prod.price}</p>
                            <img src={prod.image} alt={prod.title} width="100" /><br/>
                            <Link to={`/item/${prod.id}`}>Ver detalle</Link>
                            <Cantidad stock={10} inicial={1} nombre={prod.title} precio={prod.price} />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ItemListContainer;
