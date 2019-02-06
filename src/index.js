import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './js/store/index';
import App from './App'
import './index.css'

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}><App /></BrowserRouter>
    </Provider>, 
    document.getElementById('root')
    );
