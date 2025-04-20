import { useState } from 'react'
import { Link } from 'react-router-dom';
import './Dropdown.css';

const Dropdown = () => {
    const [mostrarOpciones, setMostrarOpciones] = useState(false);
    const alternarDropdown = () => {
        setMostrarOpciones(!mostrarOpciones);
    };
    return (
        <div className="dropdown">
            <span onClick={alternarDropdown} className="nav-link" style={{ cursor: 'pointer' }}>
                Productos
            </span>
            {mostrarOpciones && (
                <div className="dropdown-content">
                    <Link to="/productos">Todos</Link>
                    <Link to="/categoria/cubiertas">Cubiertas</Link>
                    <Link to="/categoria/transmision">Transmision</Link>
                    <Link to="/categoria/baterias">Baterías</Link>
                </div>
            )}
        </div>
    );
};

export default Dropdown;