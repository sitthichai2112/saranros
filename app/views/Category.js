import React, { Component } from 'react';

class Category extends Component {
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
                        <div className="row pt-4">
                            <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                                <h4 className="padding-head-list">Lorem Ipsum </h4>
                                <div className="line-tin"></div>
                                <div className="media-body-category pt-4">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 Nopadding float-left">
                                        <img className="align-self-start w-100" src="img/img-category-01.jpg" alt=""/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 float-left Nopadding-l-r">
                                        <h4 className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี</h4>
                                        <p className="mb-0 category">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                            ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ
                                            อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body-category pt-4">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 Nopadding float-left">
                                        <img className="align-self-start w-100" src="img/img-category-01.jpg" alt=""/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 float-left Nopadding-l-r">
                                        <h4 className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี</h4>
                                        <p className="mb-0 category">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                            ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ
                                            อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body-category pt-4">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 Nopadding float-left">
                                        <img className="align-self-start w-100" src="img/img-category-01.jpg" alt=""/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 float-left Nopadding-l-r">
                                        <h4 className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี</h4>
                                        <p className="mb-0 category">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                            ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ
                                            อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body-category pt-4">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 Nopadding float-left">
                                        <img className="align-self-start w-100" src="img/img-category-01.jpg" alt=""/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 float-left Nopadding-l-r">
                                        <h4 className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี</h4>
                                        <p className="mb-0 category">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                            ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ
                                            อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body-category pt-4">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 Nopadding float-left">
                                        <img className="align-self-start w-100" src="img/img-category-01.jpg" alt=""/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 float-left Nopadding-l-r">
                                        <h4 className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี</h4>
                                        <p className="mb-0 category">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                            ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ
                                            อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body-category pt-4">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 Nopadding float-left">
                                        <img className="align-self-start w-100" src="img/img-category-01.jpg" alt=""/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 float-left Nopadding-l-r">
                                        <h4 className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี</h4>
                                        <p className="mb-0 category">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                            ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ
                                            อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body-category pt-4">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 Nopadding float-left">
                                        <img className="align-self-start w-100" src="img/img-category-01.jpg" alt=""/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 float-left Nopadding-l-r">
                                        <h4 className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี</h4>
                                        <p className="mb-0 category">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                            ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ
                                            อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body-category pt-4">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 Nopadding float-left">
                                        <img className="align-self-start w-100" src="img/img-category-01.jpg" alt=""/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 float-left Nopadding-l-r">
                                        <h4 className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี</h4>
                                        <p className="mb-0 category">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                            ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ
                                            อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media-body-category pt-4">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 Nopadding float-left">
                                        <img className="align-self-start w-100" src="img/img-category-01.jpg" alt=""/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 float-left Nopadding-l-r">
                                        <h4 className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี</h4>
                                        <p className="mb-0 category">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                            เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                            ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ
                                            อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 pt-4 float-left">
                                    <nav className="pt-4">
                                        <ul className="pagination justify-content-center">
                                            <li className="page-item">
                                                <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                            </li>
                                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item">
                                                <a className="page-link" href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                                <h4 className="padding-head-list">Lorem Ipsum </h4>
                                <div className="line-tin"></div>
                                <div className="media mb-4">
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 Nopadding">
                                        <img className="align-self-start w-100"
                                             src="img/Lighting-Your-Food-Pictures.jpg" alt=""/>
                                    </div>
                                    <div className="col-6 col-sm-8 col-md-8 col-lg-8">
                                        <div className="media-body">
                                            <p className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                                เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช
                                                ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        </div>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media mb-4">
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 Nopadding">
                                        <img className="align-self-start w-100"
                                             src="img/Lighting-Your-Food-Pictures.jpg" alt=""/>
                                    </div>
                                    <div className="col-6 col-sm-8 col-md-8 col-lg-8">
                                        <div className="media-body">
                                            <p className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                                เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช
                                                ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        </div>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media mb-4">
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 Nopadding">
                                        <img className="align-self-start w-100"
                                             src="img/Lighting-Your-Food-Pictures.jpg" alt=""/>
                                    </div>
                                    <div className="col-6 col-sm-8 col-md-8 col-lg-8">
                                        <div className="media-body">
                                            <p className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                                เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช
                                                ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        </div>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media mb-4">
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 Nopadding">
                                        <img className="align-self-start w-100"
                                             src="img/Lighting-Your-Food-Pictures.jpg" alt=""/>
                                    </div>
                                    <div className="col-6 col-sm-8 col-md-8 col-lg-8">
                                        <div className="media-body">
                                            <p className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                                เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช
                                                ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        </div>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media mb-4">
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 Nopadding">
                                        <img className="align-self-start w-100"
                                             src="img/Lighting-Your-Food-Pictures.jpg" alt=""/>
                                    </div>
                                    <div className="col-6 col-sm-8 col-md-8 col-lg-8">
                                        <div className="media-body">
                                            <p className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                                เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช
                                                ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        </div>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media mb-4">
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 Nopadding">
                                        <img className="align-self-start w-100"
                                             src="img/Lighting-Your-Food-Pictures.jpg" alt=""/>
                                    </div>
                                    <div className="col-6 col-sm-8 col-md-8 col-lg-8">
                                        <div className="media-body">
                                            <p className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                                เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช
                                                ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        </div>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media mb-4">
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 Nopadding">
                                        <img className="align-self-start w-100"
                                             src="img/Lighting-Your-Food-Pictures.jpg" alt=""/>
                                    </div>
                                    <div className="col-6 col-sm-8 col-md-8 col-lg-8">
                                        <div className="media-body">
                                            <p className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                                เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช
                                                ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        </div>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media mb-4">
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 Nopadding">
                                        <img className="align-self-start w-100"
                                             src="img/Lighting-Your-Food-Pictures.jpg" alt=""/>
                                    </div>
                                    <div className="col-6 col-sm-8 col-md-8 col-lg-8">
                                        <div className="media-body">
                                            <p className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                                เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช
                                                ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        </div>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="media mb-4">
                                    <div className="col-6 col-sm-4 col-md-4 col-lg-4 Nopadding">
                                        <img className="align-self-start w-100"
                                             src="img/Lighting-Your-Food-Pictures.jpg" alt=""/>
                                    </div>
                                    <div className="col-6 col-sm-8 col-md-8 col-lg-8">
                                        <div className="media-body">
                                            <p className="mb-0">มลยาฬัมตากาล็อกปัญจาบี เตลุคูฮินดีคันจิ คาตาคานะ
                                                เบงกาลีไมถิลีคันจิอัสสมี โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ ไมถิลีกัศมีรีทราวิฑไอริช
                                                ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี สินธีฮันกึล .</p>
                                        </div>
                                        <div className="col-12 d-flex align-items-center Nopadding">
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                            </div>
                                            <div
                                                className="col-6 col-sm-6 col-md-6 col-lg-6 Nopadding float-left d-flex justify-content-end">
                                                <p className="mb-1 text-secondary date-time">22
                                                    <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                    <span className="text-secondary">100</span>
                                                    <span><i className="fas fa-share-alt"></i></span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default Category;
