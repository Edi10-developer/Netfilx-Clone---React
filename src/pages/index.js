import React, { Component } from 'react'
import '../css/App.css';

import TabComponent from '../components/TabComponent';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <TabComponent />
                <Footer />
            </div>
        );
    }
}

export default Main;
