import React, {Component} from 'react';


class Contact extends Component {
    render() {
        return (
                <div id="main">
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
                </div>

        );
    }
}

export default Contact;
