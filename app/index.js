import React from 'react';
import ReactDOM from 'react-dom';
import RouteApp from './config/routes';
import {Provider} from 'react-redux'
import store from './store'
import {
    BrowserRouter as Router,
} from 'react-router-dom';


// import './../public/css/style.css'
// import './../public/img'
// import './../public/js/settingz'
// import './../public/plugins/swiper-4.2.0'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <RouteApp/>
        </Router>
    </Provider>

    , document.getElementById('root'));
// registerServiceWorker();
