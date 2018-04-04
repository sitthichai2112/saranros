import React, {Component} from 'react';


class Contact extends Component {
    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick="closeNav()">&times;</a>
                    <a href="index.html">Home</a>
                    <a className="" href="category.html">Category</a>
                    <a className="" href="category-2.html">Category</a>
                    <a className="" href="category-3.html">Category</a>
                    <a className="" href="category-4.html">Category</a>
                    <a className="" href="contact.html">Contact</a>
                    <div className="line-tin-w"></div>
                    <div className="">
                        <ul>
                            <li><a><i className="fab fa-facebook-square"></i></a></li>
                            <li><a><i className="fab fa-twitter-square"></i></a></li>
                            <li><a><i className="fab fa-instagram"></i></a></li>
                            <li><a><i className="fab fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div id="main">
                    <div className="container-fluid nav-top-container">
                        <div className="container">
                            <div className="row nav-top">
                                <div className="col-4 d-flex justify-content-start align-items-center">
                                    <ul className="pl-0 mb-0">
                                        <li><a className="bar" onClick="openNav()"><i className="fas fa-bars"></i></a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-4 img-nav d-flex justify-content-center align-items-center">
                                    <img src="img/logo.svg"/>
                                </div>
                                <div className="col-4 align-items-center nav-social-top-bar">
                                    <div className="d-flex justify-content-end search nav-social-inner-bar">
                                        <ul>
                                            <li><a><i className="fab fa-facebook-square"></i></a></li>
                                            <li><a><i className="fab fa-twitter-square"></i></a></li>
                                            <li><a><i className="fab fa-instagram"></i></a></li>
                                            <li><a className="youtube"><i className="fab fa-youtube"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="d-flex justify-content-end">
                                        <form action="search.html">
                                            <div className="input-group input-search">
                                                <input type="text" className="form-control boder-search"
                                                       placeholder="search" aria-label="search"
                                                       aria-describedby="basic-addon2"/>
                                                <div className="input-group-append">
                                                    <button className="btn btn-outline-black" type="button"><i
                                                        className="fas fa-search"></i></button>
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
                                                   placeholder="search" aria-label="search"
                                                   aria-describedby="basic-addon2"/>
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-black" type="button"><i
                                                    className="fas fa-search"></i></button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 nav-menu">
                                    <div className="d-flex justify-content-center align-items-center nav-menu-top-bar">
                                        <ul className="nav">
                                            <li><a className="" href="index.html">Home</a></li>
                                            <li><a className="" href="category.html">Category</a></li>
                                            <li><a className="" href="category-2.html">Category</a></li>
                                            <li><a className="" href="category-3.html">Category</a></li>
                                            <li><a className="" href="category-4.html">Category</a></li>
                                            <li><a className="" href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                    <div className="line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row pt-2">
                            <div className="col-12 pt-4">
                                <h4>Contact</h4>
                                <div className="line"></div>
                            </div>
                            <div className="col-12 pt-4">
                                <div id="map_wrapper">
                                    <div className="scrolloff" id="map_canvas">
                                        <iframe className="wh-100"
                                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15501.143194914477!2d100.56896288162541!3d13.76163087452934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e8cbe63dfe5%3A0x9a35c06151b8cf63!2sRama+9+Building!5e0!3m2!1sen!2sth!4v1522726942334"
                                                frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6  pt-4 address float-left">
                                <ul className="">
                                    <li>Twitter, Inc.</li>
                                    <li>1355 Market St, Suite 900</li>
                                    <li>San Francisco, CA 94103</li>

                                    <li>P: (123) 456-7890</li>
                                </ul>
                                <ul className="">
                                    <li>Twitter, Inc.</li>
                                    <li>1355 Market St, Suite 900</li>
                                    <li>San Francisco, CA 94103
                                    </li>
                                    <li>P: (123) 456-7890</li>
                                </ul>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6  pt-4 pb-4 float-left">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputPassword1">Name</label>
                                        <input type="" className="form-control boder-search" placeholder="Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                        <input type="email" className="form-control boder-search" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="exampleInputEmail1">Phone Number</label>
                                        <input type="" className="form-control boder-search"
                                               placeholder="Phone Number"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea className="form-control boder-search" rows="3"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-black pr-4 pl-4">Send</button>
                                </form>
                            </div>
                        </div>
                    </div>
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
                </div>
            </div>
        );
    }
}

export default Contact;
