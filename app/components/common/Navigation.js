import React, {Component} from 'react';


class Navigation extends Component {
    render() {
        return (
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
        );
    }
}

export default Navigation;
