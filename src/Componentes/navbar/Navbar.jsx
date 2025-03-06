import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Navbar = () => {
    return (
        <div className={styles.Contenedor}>
            <h2>RepuestoSyS</h2>
            <ul>
                <li>
                    <Link to = "/inicio"> Inicio </Link>
                </li>
                <li>
                    <Link to = "/productos"> Productos </Link>
                </li>
            </ul>
            <Badge badgeContent={1} color="primary">
                <AddShoppingCartIcon color="action" />
            </Badge>
        </div>
    )
}

export default Navbar;