import React, { Component } from 'react';
import './index.css';

class UploadComment extends Component {
    upload () {

    }

    render() {
        return (
            <div className="UploadComment">
                <form>
                    <p>Категорія</p>
                    <input type="text" />
                    <p>Коментар</p>
                    <textarea rows="80" cols="50"></textarea>
                    <button onClick={() => this.upload()}>Додати Відгук</button>
                </form>
            </div>
        );
    }
}

export default App;
