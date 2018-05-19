import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="Profile">
                <div className="user">
                    <div className="avatar">
                    <img src={''} />
                    </div>
                    <div>
                        <h3>Name: John Doe</h3>
                        <h3>Email: John Doe</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
