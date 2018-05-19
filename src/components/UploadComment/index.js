import React, { Component } from 'react';
import './index.css';

class UploadComment extends Component {
    upload () {

    }

    render() {
        return (
            <div className="UploadComment">
                <form>
                    <h3>Категорія</h3>
                    <input type="text" />
                    <h3>Коментар</h3>
                    <textarea rows="10" cols="20"></textarea>

                    <button onClick={() => this.upload()}>Додати Відгук</button>
                </form>
            </div>
        );
    }
}

export default UploadComment;
