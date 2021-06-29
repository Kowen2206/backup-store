import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Checkout.scss';
import AppContext from '../context/AppContext';
import useSumeTotal from '../hooks/useSumeTotal';


const Checkout = () => {

  const {state, removeFromCart} = useContext(AppContext);
  const {cart} = state;

  const handleRemove = product => removeFromCart(product);

 const handleSumTotal = useSumeTotal();

  return(
      <div className="Checkout">
        <div className="Checkout_content">
          {cart.length > 0? <h3>Lista de Pedidos:</h3> : <h3>No hay nada en tu carrito</h3>}
          {

            cart.map(item => (
            
            <div key={cart.id} className="Checkout_item">
            <div className="Checkout_element">
              <div className="Checkout_amount">{`${item.amount}`}</div>
              <h4>{item.title}</h4>
              <span>${item.price * item.amount}</span>
            </div>
            <button onClick={() => handleRemove(item)} type="button">Eliminar</button>
          </div>)
            )
          }
        </div>
        {cart.length > 0 && <div className="Checkout_sidebar">
          <h3>Precio Total: ${handleSumTotal(cart)}</h3>
          <Link to="/checkout/information">
          <button type="button">Continuar pedido</button>
          </Link>
        </div>}
      </div>
    )};
  

export default Checkout
