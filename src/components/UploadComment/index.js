import React, { Component } from 'react';
import './index.css';
import {
    newComment
} from '../../services/https'

class UploadComment extends Component {

    constructor (props) {
        super(props)

        this.state = {
            preview: [],
            comment: {
              images: [],
              category: '',
              theme: '',
              text: '',
              typeComment: ''
            }
        }

        this.changeValue = this.changeValue.bind(this);
        this.pushImage = this.pushImage.bind(this)
        this.submit = this.submit.bind(this)
    }

    changeValue (key, value) {
        this.setState({
            comment: {
                ...this.state.comment,
                [key]: value
            }
        })
    }

    pushImage (files) {
        if (files && files[0]) {
            var reader = new FileReader()

            reader.onloadend = () => {
                this.setState((prevState) => ({
                    preview: prevState.preview.concat(
                        [reader.result]
                    )}
                ))
            }
            reader.readAsDataURL(files[0])
        }
    }

      submit (event) {
        newComment(this.state.comment)
            .then(console.log)
            .catch(console.warn)
      }

    initMap() {}

    render() {
        return (
            <div className="UploadComment">
                <form onSubmit={this.submit}>
                    <div>
                    <h2>Фото</h2>
                    <div className="preview">
                    {this.state.preview.map((path, i) => {
                        return <div className="img-container"><img key={i} className="preview-image" src={path} /></div>;
                    })}
                    </div>

                    <label htmlFor="file-upload" class="custom-file-upload">
                        Завантажити
                    </label>
                    <input id="file-upload" type="file" onChange={(e) => this.pushImage(e.target.files)} />
                    <h2>Категорія</h2>
                    <select name="categories" >
                        <option value="roads">Дороги</option>
                        <option value="trc">ТРЦ</option>
                        <option value="parks">Парки</option>
                        <option value="beaches">Пляжі</option>
                        <option value="trashboxes">Смітники</option>
                    </select>
                    <h2>Тема</h2>
                    <input
                      type="text"
                      value={this.state.comment.theme}
                      onChange={event => this.changeValue('theme', event.target.value)}
                    />
                    <h2>Коментар</h2>
                    <textarea
                       value={this.state.comment.text}
                       onChange={event => this.changeValue('text', event.target.value)}
                       rows="10" cols="20">
                    </textarea>
                    <button type="submit" >Додати Відгук</button>
                    </div>
                    <div className="secondPart">
                        <h2>Тип Коментаря</h2>
                        <div>
                            <input type="radio" id="contactChoice1" name="contact" value="true"  />
                            <label for="contactChoice1">Позитивний</label>
                            <input type="radio" id="contactChoice2" name="contact" value="false" />
                            <label for="contactChoice2">Негативний</label>
                        </div>
                        <div>
                            <div id="map"></div>
                        </div>
                    </div>

                </form>
            </div>
        );
    }
}

export default UploadComment;
