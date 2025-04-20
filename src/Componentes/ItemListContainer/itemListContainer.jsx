import { useState, useEffect } from 'react'; 
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import ItemList from './itemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [productos, setProductos] = useState ([]);
    const { categoriaId } = useParams();

    useEffect(() => {
        const traerProductos = async () => {
            try {
                const productosRef = collection(db, "productos");

                const q = categoriaId
                    ? query(productosRef, where ("categoria", "==", categoriaId))
                    : productosRef; 
                const snapshot = await getDocs (q);
                const docs = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }));
                setProductos(docs);
            } catch (error) {
                console.error("Error al traer productos:", error);
            }
    };
        traerProductos();
    }, [categoriaId]);

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ItemList productos={productos}/>
        </div>
    );
};

export default ItemListContainer;
