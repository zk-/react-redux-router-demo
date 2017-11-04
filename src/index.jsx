import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import store from './store';
import App from './App.jsx';
import Test from './pages/test/index.jsx';
import './index.css';
const routes = (
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Test} />
                <Route path="test" component={Test}/>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));