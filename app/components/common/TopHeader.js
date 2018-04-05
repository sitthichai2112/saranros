import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    Link,
    withRouter
} from 'react-router-dom';


class TopHeader extends Component {

    openNavigation = () => {
        this.props.clickOpenNavigation(true)
    }

    render() {
        
        return (
            <div className="container-fluid nav-top-container">
                <div className="container">
                    <div className="row nav-top">
                        <div className="col-4 d-flex justify-content-start align-items-center">
                            <ul className="pl-0 mb-0">
                                <li><a className="bar" onClick={() => this.openNavigation()}><i
                                    className="fas fa-bars"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-4 img-nav d-flex justify-content-center align-items-center">
                            <img src="img/logo.svg"/>
                        </div>
                        <div className="col-4 align-items-center nav-social-top-bar">
                            <div className="d-flex justify-content-end search">
                                <ul>
                                    <li><a><i className="fab fa-facebook-square"></i></a></li>
                                    <li><a><i className="fab fa-twitter-square"></i></a></li>
                                    <li><a><i className="fab fa-instagram"></i></a></li>
                                    <li><a><i className="fab fa-youtube"></i></a></li>
                                </ul>
                            </div>
                            <div className="d-flex justify-content-end">
                                <form action="search.html">
                                    <div className="input-group input-search">
                                        <input type="text" className="form-control boder-search"
                                               placeholder="search"
                                               aria-label="search" aria-describedby="basic-addon2"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-black" type="submit">
                                                <i className="fas fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-4 d-flex justify-content-end align-items-center">
                            <div id="btn-search" className="icon-search">
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 pb-4 search-mb">
                        <div className="d-flex justify-content-center">
                            <form action="search.html">
                                <div className="input-group input-search">
                                    <input type="text" className="form-control boder-search"
                                           placeholder="search"
                                           aria-label="search" aria-describedby="basic-addon2"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-black" type="submit">
                                            <i className="fas fa-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 nav-menu">
                            <div className="d-flex justify-content-center align-items-center nav-menu-top-bar">
                                <ul className="nav">
                                    <li>
                                        <Link to='/home'
                                              className={this.props.location.pathname === '/home' ? 'active' : ''}>Home
                                        </Link>
                                    </li>
                                    <li><Link to='/category'
                                              className={this.props.location.pathname === '/category' ? 'active' : ''}>Category</Link>
                                    </li>
                                    <li><Link to='/category2'
                                              className={this.props.location.pathname === '/category2' ? 'active' : ''}>Category</Link>
                                    </li>
                                    <li><Link to='/category3'
                                              className={this.props.location.pathname === '/category3' ? 'active' : ''}>Category</Link>
                                    </li>
                                    <li><Link to='/category4'
                                              className={this.props.location.pathname === '/category4' ? 'active' : ''}>Category</Link>
                                    </li>
                                    <li><Link to='/contact'
                                              className={this.props.location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="line"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


function MapStateToProps(state) {
    return {}
}


export default withRouter(connect(MapStateToProps, (null, dispatch => bindActionCreators({}, dispatch)))(TopHeader))
