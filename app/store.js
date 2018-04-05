import {createStore, applyMiddleware} from 'redux'
import reducers from './reducers'
import {routerMiddleware} from 'react-router-redux'
import thunk from 'redux-thunk'
import history from './config/history'


const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk, routerMiddleware(history))
)

export default store;