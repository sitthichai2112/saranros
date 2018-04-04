import React from 'react';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
    Redirect, withRouter
} from 'react-router-dom';


import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import Home from '../views/Home'
import Category from '../views/Category'
import Category2 from '../views/Category2'
import Category3 from '../views/Category3'
import Category4 from '../views/Category4'
import Contact from '../views/Contact'
import Main from '../components/common/layouts/Main'

const RouteApp = ({}) => (
    <Main>
        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/category" component={Category}/>
            <Route path="/category2" component={Category2}/>
            <Route path="/category3" component={Category3}/>
            <Route path="/category4" component={Category4}/>
            <Route path="/contact" component={Contact}/>
            <Redirect to='/home'/>
        </Switch>
    </Main>
)


export default withRouter(connect(
    state => ({}), dispatch => bindActionCreators({}, dispatch)
)(RouteApp))


