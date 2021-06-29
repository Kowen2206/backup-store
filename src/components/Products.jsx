import React, {useContext} from 'react';
import Product from './Product';
import '../assets/styles/components/Products.scss'
import AppContext from '../context/AppContext';

const Products = () =>{
    
    const {state, addToCart} = useContext(AppContext);
    const {products} = state;

    const handleAddToCart = product =>{
        addToCart(product);
    }
    return(
        <div className="products_container">
           { products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}/>
            )}
        </div>
    )}

export default Products;
