import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/containers/Information.scss';
import AppContext from '../context/AppContext';


const Information = () => {
  const form = useRef(null);

  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const history = useHistory();


  const handleSubmit = () => {

    const formData = new FormData(form.current);

    console.log(form.current);
    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      addres: formData.get('addres'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    }

    addToBuyer(buyer);
    history.push('/checkout/payment');
    
  }


  return (
    <div className="Information">
      <div className="Information_content">
        <div className="Information_head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information_form">
          <form ref={form} action="">
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information_buttons">
          <div className="Information_back">
            Regresar
          </div>
          <div className="Information_next">
            <button onClick={() => handleSubmit()} type="button">Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information_sidebar">
        <h3>Pedido: </h3>
        {cart.map(item =>
          (<div className="Information_item">
          <div className="Information_element">
            <h4>{item.title}</h4>
            <span>${item.price}</span>
          </div>
        </div>)
        )}
      </div>
    </div>
  )
};


export default Information;