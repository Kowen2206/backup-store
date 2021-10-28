import React, {useContext, useEffect} from 'react'
import { PayPalButton } from 'react-paypal-button';
import {useHistory} from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../assets/styles/containers/Payment.scss'
import useSumeTotal from '../hooks/useSumeTotal';
import keys from '../utils/keys/keys';


const Payment = () =>{
    
    useEffect(() => {
    }, []);
    // eslint-disable-next-line no-unused-vars
    const { state, addNewOrder } = useContext(AppContext);
    // eslint-disable-next-line no-unused-vars
    const { cart, buyer } = state;

    const history = useHistory();
    const handleSumTotal = useSumeTotal();

    const handlePaymentSuccess = (data) =>{
       if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                product: cart,
                payment: data
            }
          addNewOrder(newOrder, history.push('/success')); 
            
       }
       
    } 

   const paypalOptions = {
       clientId: keys.paypalPaymentClientID,
       intent: 'capture',
       currency: 'MXN'
   }

   const buttonStyles = {
       layout: 'vertical',
       shape: 'rect',
       size: 'responsive' 
   }
    
   return (
    <div className="Payment">
        <div className="Payment-content">
            <h3>Resument del pedido:</h3>
            <ul>
                {cart.map(item =>
                    <li>
                    {item.title}
                    {`  $${item.price}`}
                    </li>
                )
            }
            </ul>
            <br/>
            <b>Total</b>
            <hr />
            {`  $${handleSumTotal(cart)}`}
            <hr />
            <br/>
            <div className="Payment-button">
            <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => {
                console.log("data-error")
                console.log(data)}}
          />
            </div>
        </div>
        <div />
    </div>
    );}

export default Payment
