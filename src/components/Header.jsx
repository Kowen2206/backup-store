import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import AppContext from '../context/AppContext';

const Header = () =>{

    const {state} = useContext(AppContext);
    const {cart, productsAmount} = state;
    const [toggle, setToggle] = useState(false);

    const handleHeadrMenu = () =>{
        setToggle(!toggle);
    }

    return(
        <header>
            <div className="header_logo"> <Link to="/"><h1>BACKUP3D</h1></Link> </div>
            
            <nav className="header_nav">
                    <ul>
                        <Link to="/"> <li>Home </li></Link>
                        <Link to="/Checkout"> <li>Carrito </li></Link>
                    </ul>
            </nav>

            { 
                toggle && 
                <nav className="header_nav_mobile">
                    <ul>
                        <Link to="/"> <li>Home </li></Link>
                        <Link to="/Checkout"> <li>Carrito </li></Link>
                    </ul>
                </nav>
            }

            <div className="header_checkout">
                <Link to="/Checkout">
                    <div className="checkout_icon"/>
                </Link>
                {cart.length > 0 && <div className="header_counter" > {productsAmount && productsAmount} </div>}
            </div>

            <div className="header_checkout">
                    <button aria-label="toggle-menu" type="button" onClick={()=>{handleHeadrMenu()}} className="toggle"> 
                        <div className="toggle_icon"/>
                    </button>
            </div>
        </header>
    );}

export default Header;

