import App from './components/App';
import initStore from './rdx/store';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'element-scroll-polyfill';
import './index.scss';

const store = initStore(false);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
