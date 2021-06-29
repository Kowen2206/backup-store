import React from 'react'
import '../assets/styles/containers/Success.scss';
import success from  '../assets/images/succes.png'

const Succes = () =>(
    <div className="Success">
        <div className="Success-content">
        <img src={success} alt="" />
            <h1>Gracias por tu compra</h1>
        </div> 
    </div>
);

export default Succes
