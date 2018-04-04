import React from 'react';
import Navigation from './../Navigation';
import Footer from './../Footer';
import TopHeader from './../TopHeader';

class Main extends React.Component {
    render() {
        return (
            <div>
                <Navigation/>
                <div id='main'>
                    <TopHeader/>
                    {this.props.children}
                    <Footer/>
                </div>

            </div>
        )
    }
}

export default Main
