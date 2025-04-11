import { useState, useEffect } from 'react'; 
import ItemList from './itemList';

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);

/*    useEffect(() => {
        const traerProductos = async () => {
            const productosRef = collection(db, "productos");
            const snapshot = await getDocs (productosRef);
            const docs = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setProductos(docs);
        };
        
        traerProductos();
    }, []);*/

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ItemList productos={productos}/>
        </div>
    );
};

export default ItemListContainer;
