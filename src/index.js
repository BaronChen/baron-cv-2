import './styles/main.css';

import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-snapshot';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './App';
// import registerServiceWorker from './registerServiceWorker';

import { initStore, history } from './store';

const store = initStore();

// ReactDOM.render(
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));


//registerServiceWorker();
