import React, { Component } from 'react';
import './index.css';

class UploadComment extends Component {

    constructor (props) {
        super(props)

        this.state = {
            preview: []
        }

        this.pushImage = this.pushImage.bind(this)
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

    initMap() {}

    render() {
        return (
            <div className="UploadComment">
                <form>
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
                    <select name="categories">
                        <option value="roads">Дороги</option>
                        <option value="trc">ТРЦ</option>
                        <option value="parks">Парки</option>
                        <option value="beaches">Пляжі</option>
                        <option value="trashboxes">Смітники</option>
                    </select>
                    <h2>Тема</h2>
                    <input type="text" />
                    <h2>Коментар</h2>
                    <textarea rows="10" cols="20"></textarea>
                    <button onClick={() => this.upload()}>Додати Відгук</button>
                    </div>
                    <div className="secondPart">
                        <h2>Тип Коментаря</h2>
                        <div>
                            <input type="radio" id="contactChoice1" name="contact" value="email" />
                            <label for="contactChoice1">Позитивний</label>
                            <input type="radio" id="contactChoice2" name="contact" value="phone" />
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
