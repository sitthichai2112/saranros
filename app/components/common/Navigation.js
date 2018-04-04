import React, { Component } from 'react';

class Navigation extends Component {
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
                                            <li><a href="index.html">Home</a></li>
                                            <li><a className="" href="category.html">Category</a></li>
                                            <li><a className="" href="category-2.html">Category</a></li>
                                            <li><a className="" href="category-3.html">Category</a></li>
                                            <li><a className="" href="category-4.html">Category</a></li>
                                            <li><a className="" href="contact.html">Contact</a></li>
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

export default Navigation;
