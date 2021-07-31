import React from 'react'
import {useHistory} from 'react-router-dom';
import '../assets/styles/containers/Success.scss';


const Succes = () =>{
    const history = useHistory();

    return(
    <div className="Success">
        <div className="Success-content">
            <h1>Gracias por tu compra</h1>
        </div> 
        <button className="succes-button" type="button" onClick={()=> history.push('/home')}>
            Continuar
        </button>
    </div>
);}

export default Succes
