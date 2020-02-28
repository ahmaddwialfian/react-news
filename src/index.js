import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './config/Routes';
import * as serviceWorker from './config/serviceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
