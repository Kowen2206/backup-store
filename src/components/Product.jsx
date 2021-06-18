import React from 'react'

const Product = ({product, handleAddToCart}) =>(
        <div className="product_item">
            <img className="product_image" src ={product.image} alt ={product.title}/>
            <div className="product_info_container">
                <h2 className="product_item_title">
                    {product.title}
                    <span>${product.price}</span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button onClick={()=>handleAddToCart(product)} className="product_item_button" type="button">Comprar</button>
        </div>
    )

export default Product
