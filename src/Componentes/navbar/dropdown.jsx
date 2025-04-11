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
                    <Link to="/categoria/electronics">Electronica</Link>
                    <Link to="/categoria/jewelery">Joyeria</Link>
                    <Link to="/categoria/men's clothing">Hombre</Link>
                    <Link to="/categoria/women's clothing">Mujer</Link>
                </div>
            )}
        </div>
    );
};

export default Dropdown;