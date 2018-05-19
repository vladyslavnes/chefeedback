import React, { Component } from 'react';

class LastComments extends Component {
    render() {
        return (
            <div className="LastComments">
                <div className="LastCommentsHeader">
                    <h4>Останні відгуки</h4>
                </div>
                <div className="LastCommentContainer">
                    <div className="Item">
                        <span className="avaIcon">

                        </span>
                        <h2 className="categoria">
                            fdssd
                        </h2>
                        <h3 className="subjectName">
                            sdfdsfdfd
                        </h3>
                        <span className="dateCreate">
                            21.14.1012
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LastComments;
