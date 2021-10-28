import React, { useRef, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../assets/styles/containers/Information.scss';
import AppContext from '../context/AppContext';


const Information = () => {
  let dataComplete = true;

  const form = useRef(null);

  const { state, addToBuyer } = useContext(AppContext);
  const { cart } = state;
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

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

    // eslint-disable-next-line no-restricted-syntax
    for (const _data in buyer) {
     if(buyer[_data] === ""){
        dataComplete = false;
     }
    }


    if(dataComplete){
      addToBuyer(buyer);
      history.push('/checkout/payment');
    }else{
      window.alert('Debes completar todos los campos');
      dataComplete = true;
    }
    
    
  }


  return (
    <div className="Information">
      <div className="Information_content">
        <div className="Information_head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information_form">
          <form ref={form} action="" onSubmit={(e) => handleSubmit(e)}>
            <input required type="text" placeholder="Nombre completo" name="name" />
            <input required type="email" placeholder="Correo Electronico" name="email" />
            <input required type="text" placeholder="Direccion" name="address" />
            <input required type="text" placeholder="Apto" name="apto" />
            <input required type="text" placeholder="Ciudad" name="city" />
            <input required type="text" placeholder="Pais" name="country" />
            <input required type="text" placeholder="Estado" name="state" />
            <input required type="number" placeholder="Codigo postal" name="cp" />
            <input required type="tel" placeholder="Telefono" name="phone" />
            <div className="Information_buttons">
            <div className="Information_back">
            <button onClick={() => history.push('/Home')} type="button">volver</button>
            </div>
            <div className="Information_next">
              <button type="submit">Pagar</button>
            </div>
        </div>
          </form>
        </div>
      </div>
      <div className="Information_sidebar">
        <h3>Pedido: </h3>
        {cart.map(item =>
          (<div className="Information_item">
          <div className="Information_element">
          <div className="Checkout_amount">{`${item.amount}`}</div>
            <h4>{`${item.title} `}</h4>
            <span>${item.price * item.amount}</span>
          </div>
        </div>)
        )}
      </div>
    </div>
  )
};


export default Information;