import React, { Component } from 'react';
import Welcome from '../../Welcome/';

class Home extends Component {
    render() {
        return (
            <div className="Home card">
                <Welcome />
                <h1>Свіжі відгуки</h1>
            </div>
        );
    }
}

export default Home;
