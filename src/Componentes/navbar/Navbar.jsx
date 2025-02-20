import styles from './Navbar.module.css';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Navbar = () => {
    return (
        <div className={styles.Contenedor}>
            <h2>RepuestoSyS</h2>
            <ul>
                <li>
                    Aceites
                </li>
                <li>
                    Accesorios
                </li>
            </ul>
            <Badge badgeContent={1} color="white">
                <AddShoppingCartIcon color="action" />
            </Badge>
        </div>
    )
}

export default Navbar;