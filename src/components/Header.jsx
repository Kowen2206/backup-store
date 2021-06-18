import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import AppContext from '../context/AppContext';

const Header = () =>{

    const {state} = useContext(AppContext);
    const {cart} = state;
    return(
        <header>
            <div className="header_logo"> <Link to="/"><h1>OLLAMIA</h1></Link></div>
            <nav className="header_nav">
                <ul>
                    <li>option</li>
                    <li>option1</li>
                    <li>option2</li>
                </ul>
            </nav>
            <div className="header_checkout">
                <Link to="/Checkout">
                    <div className="checkout_icon"/>
                </Link>
                {cart.length > 0 && <div className="header_counter" > {cart.length} </div>}
            </div>
        </header>
    );}

export default Header;
