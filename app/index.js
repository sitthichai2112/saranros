import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import RouteApp from './config/routes';
// import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store'
import {
    BrowserRouter as Router,
} from 'react-router-dom';


import './../public/css/style.css'
// import './../public/img'
// import './../public/js/setting'
// import './../public/plugins/swiper-4.2.0'



ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RouteApp/>
        </Router>
    </Provider>

    , document.getElementById('root'));
// registerServiceWorker();
