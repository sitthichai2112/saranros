import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class Navigation extends Component {

    closeNavigation = () => {
        this.props.clickOpenNavigation(false)
    }

    render() {
        return (
            <div className="sidenav" style={{width: this.props.status ? '250px' : '0'}}>
                <a href="javascript:void(0)" className="closebtn" onClick={() => this.closeNavigation()}>&times;</a>
                <Link to='/home'>Home</Link>
                <Link to='/category'>Category</Link>
                <Link to='/category2'>Category</Link>
                <Link to='/category3'>Category</Link>
                <Link to='/category4'>Category</Link>
                <Link to='/contact'>Contact</Link>
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
        )


    }
}



export default Navigation