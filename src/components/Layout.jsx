import React,{useEffect, useContext} from 'react'
import Header from './Header'
import Footer from './Footer'
import AppContext from '../context/AppContext'

const Layout = ({children}) =>{
    const {addToCartFromSessionStorage} = useContext(AppContext);
    useEffect(() => {
        addToCartFromSessionStorage()
    }, [] );

    return(
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )}

export default Layout
