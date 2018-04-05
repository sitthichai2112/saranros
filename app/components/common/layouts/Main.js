import React from 'react';
import Navigation from './../Navigation';
import Footer from './../Footer';
import TopHeader from './../TopHeader';

class Main extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            status: false
        }}
    checkNavigation = (status) => {

        this.setState({
                status
            }
        )
    }
    render() {
        return (
            <div>
                <Navigation status={this.state.status} clickOpenNavigation={this.checkNavigation}/>
                <div id='main'>
                    <TopHeader clickOpenNavigation={this.checkNavigation}/>
                    {this.props.children}
                    <Footer/>
                </div>

            </div>
        )
    }
}

export default Main
