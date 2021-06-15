import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Payment from '../containers/Payments';
import Succes from '../containers/Success';
import CheckOut from '../containers/CheckOut';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import '../assets/styles/App.scss';

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Home" component={Home} />
                <Route exact path="/Payment" component={Payment} />
                <Route exact path="/Succes" component={Succes} />
                <Route exact path="/CheckOut" component={CheckOut} />
                <Route component={NotFound} />
            </Switch>
        </Layout>
    </BrowserRouter>
)

export default App;