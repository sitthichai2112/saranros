import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../src/App.css';

class Home extends Component {
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
                            <div className="col-12 col-sm-12 col-md-6 col-lg-8">
                                <div className="col-12 Nopadding-l-img">
                                    <a href="inner.html">
                                        <img src="img/img-header.jpg" className="w-100"/>
                                    </a>
                                    <div className="wrap-box">
                                        <div
                                            className="col-8 col-sm-8 col-md-8 col-lg-8 Nopadding float-left d-flex justify-content-start">
                                            <p className="mb-1 text-secondary date-time">MARCH 21, 2018</p>
                                        </div>
                                        <div
                                            className="col-4 col-sm-4 col-md-4 col-lg-4 Nopadding float-left d-flex justify-content-end">
                                            <p className="mb-1 text-secondary date-time">22
                                                <sapn className="pl-1"><i className="fas fa-eye"></i></sapn>
                                                <span className="text-secondary">100</span>
                                                <span><i className="fas fa-share-alt"></i></span>
                                            </p>
                                        </div>
                                        <div
                                            className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                            <a href="inner.html">
                                                <h3>มิวสิคแดนซ์ แจ๊กเก็ตปาสเตอร์ เคสสไตรค์ฟีเวอร์โรแมนติค โหงวทอม
                                                    เพทนาการคอรัปชัน
                                                    แช่แข็ง</h3>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-12 col-sm-12 col-md-6 col-lg-6 Nopadding-l float-left padding-tum pt-4">
                                    <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                        <img src="img/img-tum-16-9.jpg" className="w-100"/>
                                    </div>
                                    <div
                                        className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                        <div className="wrap-box-tum">
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
                                            <div
                                                className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                    เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                    มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                    สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                    ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                    อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                    มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย ไอดาโฮศึกษาศาสตร์เที่ยงวัน
                                                    อัตตะปือ
                                                    เอกวาดอร์</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-12 col-sm-12 col-md-6 col-lg-6 Nopadding-l float-left padding-tum pt-4">
                                    <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                        <img src="img/img-tum-16-9.jpg" className="w-100"/>
                                    </div>
                                    <div
                                        className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                        <div className="wrap-box-tum">
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
                                            <div
                                                className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                    เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                    มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                    สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                    ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                    อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                    มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย ไอดาโฮศึกษาศาสตร์เที่ยงวัน
                                                    อัตตะปือ
                                                    เอกวาดอร์</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-12 col-sm-12 col-md-6 col-lg-4 Nopadding-l float-left padding-tum pt-4">
                                    <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                        <img src="img/img-tum.jpg" className="w-100"/>
                                    </div>
                                    <div
                                        className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                        <div className="wrap-box-tum">
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
                                            <div
                                                className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                    เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                    มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                    สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                    ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                    อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                    มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย ไอดาโฮศึกษาศาสตร์เที่ยงวัน
                                                    อัตตะปือ
                                                    เอกวาดอร์</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-12 col-sm-12 col-md-6 col-lg-4 Nopadding-l float-left padding-tum pt-4">
                                    <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                        <img src="img/img-tum.jpg" className="w-100"/>
                                    </div>
                                    <div
                                        className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                        <div className="wrap-box-tum">
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
                                            <div
                                                className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                    เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                    มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                    สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                    ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                    อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                    มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย ไอดาโฮศึกษาศาสตร์เที่ยงวัน
                                                    อัตตะปือ
                                                    เอกวาดอร์</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="col-12 col-sm-12 col-md-6 col-lg-4 Nopadding-l float-left padding-tum pt-4">
                                    <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                        <img src="img/img-tum.jpg" className="w-100"/>
                                    </div>
                                    <div
                                        className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                        <div className="wrap-box-tum">
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
                                            <div
                                                className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                    เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                    มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                    สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                    ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                    อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                    มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย ไอดาโฮศึกษาศาสตร์เที่ยงวัน
                                                    อัตตะปือ
                                                    เอกวาดอร์</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-4">
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
                                                เบงกาลีไมถิลีคันจิอัสสมี
                                                โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ
                                                ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี
                                                สินธีฮันกึล .</p>
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
                                                เบงกาลีไมถิลีคันจิอัสสมี
                                                โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ
                                                ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี
                                                สินธีฮันกึล .</p>
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
                                                เบงกาลีไมถิลีคันจิอัสสมี
                                                โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ
                                                ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี
                                                สินธีฮันกึล .</p>
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
                                                เบงกาลีไมถิลีคันจิอัสสมี
                                                โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ
                                                ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี
                                                สินธีฮันกึล .</p>
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
                                                เบงกาลีไมถิลีคันจิอัสสมี
                                                โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ
                                                ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี
                                                สินธีฮันกึล .</p>
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
                                                เบงกาลีไมถิลีคันจิอัสสมี
                                                โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ
                                                ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี
                                                สินธีฮันกึล .</p>
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
                                                เบงกาลีไมถิลีคันจิอัสสมี
                                                โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ
                                                ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี
                                                สินธีฮันกึล .</p>
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
                                                เบงกาลีไมถิลีคันจิอัสสมี
                                                โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ
                                                ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี
                                                สินธีฮันกึล .</p>
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
                                                เบงกาลีไมถิลีคันจิอัสสมี
                                                โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ
                                                ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี
                                                สินธีฮันกึล .</p>
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
                                                เบงกาลีไมถิลีคันจิอัสสมี
                                                โอริยาซีริลลิกคุรุมุขี เซลติก ไอริชอูรดู
                                                ฮีบรูคุชราตีคุรุมุขีฮิรางานะทราวิฑ
                                                ไมถิลีกัศมีรีทราวิฑไอริช ไมถิลีคาตาคานะ อารบิกอูรดูทราวิฑกัศมีรี
                                                สินธีฮันกึล .</p>
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


                            <div className="row pt-4 no-gutters-2">
                                <div className="col-12 pt-4">
                                    <h4>Lorem Ipsum </h4>
                                    <div className="line"></div>
                                </div>
                                <div className="col-12">
                                    <div
                                        className="col-12 col-sm-12 col-md-4 col-lg-4 Nopadding-l float-left padding-tum pt-4">
                                        <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-03-16-09.jpg" className="w-100"/>
                                        </div>
                                        <div
                                            className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-12 col-sm-12 col-md-4 col-lg-4 Nopadding-l float-left padding-tum pt-4">
                                        <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-03-16-09.jpg" className="w-100"/>
                                        </div>
                                        <div
                                            className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-12 col-sm-12 col-md-4 col-lg-4 Nopadding-l float-left padding-tum pt-4">
                                        <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-03-16-09.jpg" className="w-100"/>
                                        </div>
                                        <div
                                            className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-12 col-sm-12 col-md-4 col-lg-4 Nopadding-l float-left padding-tum pt-4">
                                        <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-02-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div
                                            className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-12 col-sm-12 col-md-4 col-lg-4 Nopadding-l float-left padding-tum pt-4">
                                        <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-02-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div
                                            className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className="col-12 col-sm-12 col-md-4 col-lg-4 Nopadding-l float-left padding-tum pt-4">
                                        <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-02-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div
                                            className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row pt-4 no-gutters-2">
                                <div
                                    className="col-12 col-sm-12 col-md-4 col-lg-4 order-2 order-sm-2 order-md-1 order-lg-1 pt-4">
                                    <h4>Lorem Ipsum</h4>
                                    <div className="line"></div>
                                    <div className="col-12 Nopadding padding-tum pt-4 float-left">
                                        <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-04-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div
                                            className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 Nopadding padding-tum pt-4 float-left">
                                        <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-04-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div
                                            className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 Nopadding padding-tum pt-4 float-left">
                                        <div className="col-4 col-sm-4 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-04-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div
                                            className="col-8 col-sm-8 col-md-12 col-lg-12 float-left Nopadding padding-left-p">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 float-left pt-4 text-center Nopadding">
                                        <a className="actionBtn2">
                                            <span className="hover"></span>
                                            <span>MORE</span>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="col-12 col-sm-12 col-md-8 col-lg-8 order-1 order-sm-1 order-md-2 order-lg-2 pb-4">
                                    <div className="col-12 pt-4 padding-tum float-left">
                                        <h4>Lorem Ipsum</h4>
                                        <div className="line"></div>
                                        <div className="pt-4 ">
                                            <div className="embed-responsive embed-responsive-16by9">
                                                <iframe src="https://www.youtube.com/embed/ShjQ9hB_aFs" frameBorder="0"
                                                        allow="autoplay; encrypted-media" allowFullScreen></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pt-4 float-left Nopadding-tum-l">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-05-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left Nopadding">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pt-4 float-left Nopadding-tum-r">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-05-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left Nopadding">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pt-4 float-left Nopadding-tum-l">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-05-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left Nopadding">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6 pt-4 float-left Nopadding-tum-r">
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left">
                                            <img src="img/img-tum-05-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 float-left Nopadding">
                                            <div className="wrap-box-tum">
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
                                                <div
                                                    className="col-12 col-sm-12 col-md-12 col-lg-12 Nopadding float-left d-flex justify-content-start">
                                                    <p className="mb-0">ไมเกรนเอสเพรสโซปัจฉิมนิเทศโฮสเตส
                                                        เพรสรีสอร์ตคิตส์มิสซูรี จอร์เจีย
                                                        มลภาวะโตเกียวตุ๋ยเม็กซิกัน แอลเจียร์ไทม์ เคนตักกี
                                                        สก็อตแลนด์สวาซิแลนด์แอดมิชชั่น
                                                        ลาเต้ลูเซียสกาย เกย์ไพลิน เพรสเฮียรีโมตสัมนา
                                                        อินเดียซาอุดีซิมบับเวจิ๊กโก๋
                                                        มองโกเลียวอฟเฟิลออยล์บอยคอต จอร์เจียหมวย
                                                        ไอดาโฮศึกษาศาสตร์เที่ยงวัน อัตตะปือ
                                                        เอกวาดอร์</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-4 no-gutters-2">
                            <div className="col-12 box-border d-md-flex d-lg-flex align-items-center">
                                <div
                                    className="col-12 col-sm-12 col-md-7 col-lg-7 order-1 order-sm-1 order-md-2 order-lg-2 float-left">
                                    <img src="img/img-border-16-9.jpg" className="w-100"/>
                                </div>
                                <div
                                    className="col-12 col-sm-12 col-md-5 col-lg-5 order-2 order-sm-2 order-md-1 order-lg-1 float-left">
                                    <h3>ฮาลาลโหงวแกรนด์ คอนแทค แคชเชียร์แจ๊กเก็ตแจ็กเก็ตบึ้มเอเธนส</h3>
                                    <p>โบลิเวียเช็กไฟต์ตองอูจีน จตุคามแมกกาซีนโชว์รูมโหงวเฮ้งสวิส
                                        เซลส์แมนวอลซ์สตรอเบอรีบัลแกเรียปักกิ่ง
                                        โกสัมพี ซิตี้เอสเพรสโซเย้วแทงโก้อิสรชน หลินจือดานูบโคลอมเบีย
                                        โมนาโกกัลกัตตาคอโมโรส
                                        กาฐมาณฑุเบลารุสศิลปากรรีไซเคิลเรซิ่น ยะไข่ภูฏาน ไต้หวันบาร์บี้มอสโกบุญคุณไต้หวัน
                                        ออเดอร์หลวงปู่
                                        ปีนังวิปแองโกลาเกาหลีมะนิลา เทวทหะเนบราสกาซูมราเม็งเทคโน
                                        อิหร่านนอร์เวย์ฮานอยควิเบกคุชราต
                                        เปเปอร์อัลมอนด์ มอนแทนาอะเมซอนมอลโดวาซาบาห์รีทัช</p>
                                    <div className="col-12 float-left pt-4 pb-4 text-center Nopadding">
                                        <a className="actionBtn2">
                                            <span className="hover"></span>
                                            <span>MORE</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row pt-4 no-gutters-2">
                            <div className="col-12 pt-4 Nopadding">
                                <h4>Lorem Ipsum</h4>
                                <div className="line"></div>
                            </div>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="col-12 float-left">
                                            <img src="img/img-tum-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div className="col-12 float-left">
                                            <div className="text-des">บลิเวียเช็กไฟต์ตองอูจีน
                                                จตุคามแมกกาซีนโชว์รูมโหงวเฮ้งสวิส
                                                เซลส์แมนวอลซ์สตรอเบอรีบัลแกเรียปักกิ่ง โกสัมพี
                                                ซิตี้เอสเพรสโซเย้วแทงโก้อิสรชน
                                                หลินจือดานูบโคลอมเบีย โมนาโกกัลกัตตาคอโมโรส
                                                กาฐมาณฑุเบลารุสศิลปากรรีไซเคิลเรซิ่น
                                                ยะไข่ภูฏาน ไต้หวันบาร์บี้มอสโกบุญคุณไต้หวัน
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="col-12 float-left">
                                            <img src="img/img-tum-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div className="col-12 float-left">
                                            <div className="text-des">บลิเวียเช็กไฟต์ตองอูจีน
                                                จตุคามแมกกาซีนโชว์รูมโหงวเฮ้งสวิส
                                                เซลส์แมนวอลซ์สตรอเบอรีบัลแกเรียปักกิ่ง โกสัมพี
                                                ซิตี้เอสเพรสโซเย้วแทงโก้อิสรชน
                                                หลินจือดานูบโคลอมเบีย โมนาโกกัลกัตตาคอโมโรส
                                                กาฐมาณฑุเบลารุสศิลปากรรีไซเคิลเรซิ่น
                                                ยะไข่ภูฏาน ไต้หวันบาร์บี้มอสโกบุญคุณไต้หวัน
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="col-12 float-left">
                                            <img src="img/img-tum-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div className="col-12 float-left">
                                            <div className="text-des">บลิเวียเช็กไฟต์ตองอูจีน
                                                จตุคามแมกกาซีนโชว์รูมโหงวเฮ้งสวิส
                                                เซลส์แมนวอลซ์สตรอเบอรีบัลแกเรียปักกิ่ง โกสัมพี
                                                ซิตี้เอสเพรสโซเย้วแทงโก้อิสรชน
                                                หลินจือดานูบโคลอมเบีย โมนาโกกัลกัตตาคอโมโรส
                                                กาฐมาณฑุเบลารุสศิลปากรรีไซเคิลเรซิ่น
                                                ยะไข่ภูฏาน ไต้หวันบาร์บี้มอสโกบุญคุณไต้หวัน
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="col-12 float-left">
                                            <img src="img/img-tum-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div className="col-12 float-left">
                                            <div className="text-des">บลิเวียเช็กไฟต์ตองอูจีน
                                                จตุคามแมกกาซีนโชว์รูมโหงวเฮ้งสวิส
                                                เซลส์แมนวอลซ์สตรอเบอรีบัลแกเรียปักกิ่ง โกสัมพี
                                                ซิตี้เอสเพรสโซเย้วแทงโก้อิสรชน
                                                หลินจือดานูบโคลอมเบีย โมนาโกกัลกัตตาคอโมโรส
                                                กาฐมาณฑุเบลารุสศิลปากรรีไซเคิลเรซิ่น
                                                ยะไข่ภูฏาน ไต้หวันบาร์บี้มอสโกบุญคุณไต้หวัน
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="col-12 float-left">
                                            <img src="img/img-tum-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div className="col-12 float-left">
                                            <div className="text-des">บลิเวียเช็กไฟต์ตองอูจีน
                                                จตุคามแมกกาซีนโชว์รูมโหงวเฮ้งสวิส
                                                เซลส์แมนวอลซ์สตรอเบอรีบัลแกเรียปักกิ่ง โกสัมพี
                                                ซิตี้เอสเพรสโซเย้วแทงโก้อิสรชน
                                                หลินจือดานูบโคลอมเบีย โมนาโกกัลกัตตาคอโมโรส
                                                กาฐมาณฑุเบลารุสศิลปากรรีไซเคิลเรซิ่น
                                                ยะไข่ภูฏาน ไต้หวันบาร์บี้มอสโกบุญคุณไต้หวัน
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="col-12 float-left">
                                            <img src="img/img-tum-16-9.jpg" className="w-100"/>
                                        </div>
                                        <div className="col-12 float-left">
                                            <div className="text-des">บลิเวียเช็กไฟต์ตองอูจีน
                                                จตุคามแมกกาซีนโชว์รูมโหงวเฮ้งสวิส
                                                เซลส์แมนวอลซ์สตรอเบอรีบัลแกเรียปักกิ่ง โกสัมพี
                                                ซิตี้เอสเพรสโซเย้วแทงโก้อิสรชน
                                                หลินจือดานูบโคลอมเบีย โมนาโกกัลกัตตาคอโมโรส
                                                กาฐมาณฑุเบลารุสศิลปากรรีไซเคิลเรซิ่น
                                                ยะไข่ภูฏาน ไต้หวันบาร์บี้มอสโกบุญคุณไต้หวัน
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-button-next"><i className="fas fa-chevron-right"></i></div>
                                <div className="swiper-button-prev"><i className="fas fa-chevron-left"></i></div>
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

export default Home;
