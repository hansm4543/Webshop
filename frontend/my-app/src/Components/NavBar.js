//import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar (){
    return (
        <div className="navbar">
            <Link to ="/">
                <img className="logo" src="/shop.png" alt="Veebilehe logo"></img>
            </Link>


            <Link to="/cart">
                <img className="cart" src="/cart.png" alt="Ostukorvi logo"></img>
            </Link>

        </div>
    );

}

export default Navbar;