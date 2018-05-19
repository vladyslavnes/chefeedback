import React, { Component } from 'react';
import Welcome from '../../Welcome/';
import LastComments from '../../LastComments/';

class Home extends Component {
    render() {
        return (
            <div className="Home card">
                <Welcome />
                <LastComments/>
            </div>
        );
    }
}

export default Home;
