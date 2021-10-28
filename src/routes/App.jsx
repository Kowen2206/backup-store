import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Payment from '../containers/Payments';
import Success from '../containers/Success';
import CheckOut from '../containers/CheckOut';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import Information from '../containers/Information';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';
import Preloader from '../components/Preloader';
import '../assets/styles/App.scss';

const App = () => {

    const initialState = useInitialState();
   
    const isEmpty = Object.keys(initialState.state).length;

    return (
        <>
            {isEmpty > 0? (<AppContext.Provider value={initialState}>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/checkout/payment" component={Payment} />
                            <Route exact path="/success" component={Success} />
                            <Route exact path="/CheckOut" component={CheckOut} />
                            <Route exact path="/checkout/information" component={Information} />
                            <Route component={NotFound} />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </AppContext.Provider>) : <Preloader /> }
        </>
    );
}
export default App;