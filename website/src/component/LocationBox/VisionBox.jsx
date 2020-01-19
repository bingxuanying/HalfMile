import React, { Component } from "react";
import axios, { post } from "axios";
import "./VisionBox.sass";
import qs from "query-string";
import "./VisionBox.sass";
import FormData from "form-data";

//Use to upload the image
class VisionBox extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     file: null
  //   };
  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  //   this.onChange = this.onChange.bind(this);
  //   this.fileUpload = this.fileUpload.bind(this);
  // }
  // onFormSubmit(image) {
  //   // Stop form submit
  //   this.fileUpload(this.state.file).then(response => {
  //     console.log(response.data);
  //   });
  // }
  // onChange(image) {
  //   this.setState({ file: image.target.files[0] });
  // }
  // fileUpload(img) {
  //   const url =
  //     "https://us-central1-halfmile-63aa4.cloudfunctions.net/helloWorld2";
  //   const formData = new FormData();
  //   formData.append("file", img);
  //   const config = {
  //     headers: {
  //       "content-type": "multipart/form-data"
  //     }
  //   };
  //   return post(url, formData, config);
  // }

  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log("we enter submis");
    const requestBody = {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/a/a3/Shanghai_oriental_pearl_tower.JPG"
    };

    const config = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    };

    axios
      .post(
        "https://us-central1-halfmile-63aa4.cloudfunctions.net/helloWorld",
        qs.stringify(requestBody),
        config
      )
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="vision-box">
        <button type="button" id="upload-button" onClick={this.onSubmit}>
          Upload
        </button>
        <input
          type="url"
          id="file-upload"
          placeholder="put img url to get location"
        />
      </div>
    );
  }
}

export default VisionBox;
