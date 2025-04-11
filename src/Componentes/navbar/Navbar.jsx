import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Dropdown from './dropdown';
import Badge from '@mui/material/Badge';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartWidget from '../ui/cartWidget/CartWidget';

const Navbar = () => {

    const { totalQuantity } = useContext(CartContext);

    return (
        <div className={styles.NavWrapper}>
            <div className={styles.Contenedor}>
                <h2>RepuestoSyS</h2>
                <ul>
                    <li>
                        <Link to = "/inicio" className= {styles.linknav}> Inicio </Link>
                    </li>
                    <li>
                        <Dropdown />
                    </li>
                </ul>
                <div className={styles.Carrito}>
                    <Link to ="/cart">
                        <Badge badgeContent={totalQuantity} color="primary">
                            <AddShoppingCartIcon color="action" />
                        </Badge>
                    </Link>
                    <CartWidget/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;