import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="myContainer">
                    <div className="logo">
                        <a href="#">
                            <img src={require("../../../assets/images/logo.png")} alt="CheFeedback"/>
                            <h1>CheFeedback</h1>
                        </a>
                    </div>
                    <nav className="mainNav">
                        <ul>
                            <li className="categories">
                                <a href="#/categories">
                                    Категорії
                                </a>
                            </li>
                            <li className="feedback">
                                <a href="#/feedback">
                                    Відгуки
                                </a>
                            </li>
                            <li className="aboutUs">
                                <a href="#/aboutUs">
                                    Про нас
                                </a>
                            </li>

                        </ul>
                    </nav>
                    <div className="enter">
                        <a href="#">Вхід</a>
                    </div>
                </div>

            </header>
        );
    }
}

export default Header;
