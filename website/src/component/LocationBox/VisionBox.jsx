import React, { Component } from "react";
import axios, { post } from "axios";
import "./VisionBox.sass";

//Use to upload the image
class VisionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.fileUpload = this.fileUpload.bind(this);
  }
  onFormSubmit(image) {
    image.preventDefault(); // Stop form submit
    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
    });
  }
  onChange(image) {
    this.setState({ file: image.target.files[0] });
  }
  fileUpload(img) {
    const url = "mingzhu.jpg";
    const formData = new FormData();
    formData.append("file", img);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }
  render() {
    return (
      <div>
        <input type="file" id="file-upload" onChange={this.onChange} />
        <button type="submit" id="upload-button">
          Upload
        </button>
      </div>
    );
  }
}

export default VisionBox;
