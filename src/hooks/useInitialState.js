import { useState, useEffect } from "react";
import axios from 'axios';
import initialState from "../initialState";
import config from "../config/config";


const useInitialState = () => {

    const API = `${config.api_url}/products`;
    const [state, setState] = useState(initialState);
    const [products, setProducts] = useState([]);
 

    useEffect(() => {
        axios.get(API)
        .then(res => setProducts(res.data))
        .catch(err =>{
            console.log("error");
            console.log(err);

        })
    }, []);


    const getProductsLength = (productsAmount = 0) =>{
        if(state.cart){
            state.cart.forEach(product => {
              // eslint-disable-next-line no-param-reassign
              productsAmount +=  product.amount;
            });
            
        }
        return productsAmount;
    }

    const addToCart = payload => {
        // to do: agregar el valor boleano countable a los productos para en base a este valor si un producto se puede sumar o no.
        const productExistence = state.cart.find(item => item.id === payload.id);
        if (productExistence) {
            const productIndex = state.cart.indexOf(productExistence);
            state.cart[productIndex].amount += 1;
            setState({
                ...state,
                cart: state.cart,
                productsAmount: getProductsLength()
            });
        window.sessionStorage.setItem("productsAmount", getProductsLength())
        window.sessionStorage.setItem("cart", JSON.stringify(state.cart));
        } else {
            setState({
                ...state,
                cart: [...state.cart, { ...payload, amount: 1 }],
                productsAmount: getProductsLength() + 1
            });
            window.sessionStorage.setItem("productsAmount", getProductsLength() + 1)
            window.sessionStorage.setItem("cart", JSON.stringify([...state.cart, { ...payload, amount: 1 }]));
        }
    }

    const addToCartFromSessionStorage = () => {
        if (window.sessionStorage.getItem('cart')) {
            setState({ ...state,productsAmount: JSON.parse(window.sessionStorage.getItem('productsAmount')), cart: JSON.parse(window.sessionStorage.getItem('cart')) });
        } else {
            console.log("There isn't products in storage")
        }
    }

    const removeProductFromSessionStorage = () => {
        window.sessionStorage.removeItem("cart");
    }

    const removeFromCart = payload => {
        const productExistence = state.cart.find(item => item.id === payload.id);
        if (productExistence) {
            const productIndex = state.cart.indexOf(productExistence);
            if (state.cart[productIndex].amount > 1) {
                state.cart[productIndex].amount -= 1;
            } else {
                state.cart.splice(productIndex, 1);
            }

            setState({
                ...state,
                cart: state.cart,
                productsAmount: getProductsLength()
            });
        }

        window.sessionStorage.setItem("cart", JSON.stringify(state.cart));
        window.sessionStorage.setItem("productsAmount", getProductsLength())
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        });
    }

    const addNewOrder = (payload, callback) => {
        setState({
            ...state, orders: [...state.orders, payload],
            cart: []
        });
        window.sessionStorage.removeItem('cart');
        window.sessionStorage.removeItem('productsAmount');
        callback();
     
    }

    return {
        addToCart,
        removeFromCart,
        addToBuyer,
        addNewOrder,
        addToCartFromSessionStorage,
        removeProductFromSessionStorage,
        products,
        state
    }

};

export default useInitialState;