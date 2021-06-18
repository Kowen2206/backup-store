import React, {useContext} from 'react'
import { PayPalButton } from 'react-paypal-button';
import {useHistory} from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../assets/styles/containers/Payment.scss'
import useSumeTotal from '../hooks/useSumeTotal';


const Payment = () =>{
    
    const { state, addNewOrder } = useContext(AppContext);
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
            addNewOrder(newOrder);
            history.push('/checkout/success')
        }
    } 

   const paypalOptions = {
       clientId: '',
       intent: 'capture',
       currency: 'MXn'
   }

   const buttonStyles = {
       layout: 'vertical',
       shape: 'rect'
   }
    
   return (
    <div className="Payment">
        <div className="Payment-content">
            <h3>Resument del pedido:</h3>
            <div className="Payment-button">
            <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal(cart)}
            onPaymentStart={() => console.log('Start Payment')}
            onPaymentSuccess={data => handlePaymentSuccess(data)}
            onPaymentError={error => console.log(error)}
            onPaymentCancel={data => console.log(data)}
          />
            </div>
        </div>
        <div />
    </div>
    );}

export default Payment
