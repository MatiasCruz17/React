import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)

    return (
        <div>
            <Link to = "/cart">
                {totalQuantity > 0 && <span>{totalQuantity}</span>}
            </Link>
        </div>
    )
}

export default CartWidget