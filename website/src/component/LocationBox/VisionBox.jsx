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
    // Stop form submit
    this.fileUpload(this.state.file).then(response => {
      console.log(response.data);
    });
  }
  onChange(image) {
    this.setState({ file: image.target.files[0] });
  }
  fileUpload(img) {
    const url =
      "https://us-central1-halfmile-63aa4.cloudfunctions.net/helloWorld2";
    const formData = new FormData();
    formData.append("file", img);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }

  // submit = () => {
  //   const requestBody = {
  //     imgUrl:
  //       "https://upload.wikimedia.org/wikipedia/commons/a/a3/Shanghai_oriental_pearl_tower.JPG"
  //   };

  //   const config = {
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     }
  //   };

  //   axios
  //     .post(
  //       "https://us-central1-halfmile-63aa4.cloudfunctions.net/helloWorld2",
  //       qs.stringify(requestBody),
  //       config
  //     )
  //     .then(result => {
  //       console.log(result);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="file" id="file-upload" onChange={this.onChange} />
          <button type="submit" id="upload-button">
            Upload
          </button>
        </form>
      </div>
    );
  }
}

export default VisionBox;
