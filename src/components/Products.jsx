import React, {useContext} from 'react';
import Product from './Product';
import '../assets/styles/components/Products.scss'
import AppContext from '../context/AppContext';
import Preloader from './Preloader';

const Products = () =>{
    
    const {products, addToCart} = useContext(AppContext);

    const handleAddToCart = product =>{
        addToCart(product);
    }
    return(
        <div className="products_container">
           { products.length && products ? products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}/>
            ) : <Preloader /> }
        </div>
    )}

export default Products;
