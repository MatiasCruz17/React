import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const TestFirebase = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "productos"));
                const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProductos(docs);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener productos:", error);
                setLoading(false);
            }
        };

        obtenerProductos();
    }, []);

    if (loading) return <p>Cargando productos...</p>;

    return (
        <div>
            <h2>Prueba de conexión con Firebase</h2>
            {productos.length === 0 ? (
                <p>No hay productos cargados en Firestore.</p>
            ) : (
                <ul>
                    {productos.map((prod) => (
                        <li key={prod.id}>
                            {prod.nombre} - ${prod.precio}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TestFirebase;
