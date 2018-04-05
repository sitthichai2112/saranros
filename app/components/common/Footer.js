import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Footer extends Component {
    render() {
        return (
            <div className="container-fluid bg-black">
                <div className="container">
                    <footer>
                        <div className="row pb-2 no-gutters-2">
                            <div className="col-12">
                                <div className="line-tin"></div>
                                <div className="col-12">
                                    <div
                                        className="d-flex justify-content-center align-items-center nav-menu-footer-bar pb-4">
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
                                </div>
                                <p className="text-drak text-center">© 2017 Lorem Ipsum. All rights
                                    reserved.</p>
                            </div>
                        </div>
                        <a id="back-to-top" href="#" className="btn btn-black btn-lg back-to-top" role="button"><i
                            className="fa fa-angle-up"></i></a>
                    </footer>
                </div>
            </div>
        );
    }
}


function MapStateToProps(state) {
    return {}
}


export default withRouter(connect(MapStateToProps, (null, dispatch => bindActionCreators({}, dispatch)))(Footer))

