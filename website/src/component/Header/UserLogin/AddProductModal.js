import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimesCircle,
  faToolbox,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";
import NewProductStore from "../../stores/NewProductStore";
import * as NewProductActions from "../../actions/NewProductActions";

class AddProductModal extends Component {
  constructor() {
    super();
    this.state = {
      newProducts: NewProductStore.getAll(),
      postData: []
    };

    this.getNewProducts = this.getNewProducts.bind(this);
    this.createNew = this.createNew.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    NewProductStore.on("change", this.getNewProducts);
  }

  componentWillUnmount() {
    NewProductStore.removeListener("change", this.getNewProducts);
  }

  getNewProducts() {
    this.setState({
      newProducts: NewProductStore.getAll()
    });
  }

  createNew() {
    NewProductActions.createNew();
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    let formData = new FormData(e.target);
    let _formData = Array.from(formData);
    let data = [];

    for (let i = 0; i < _formData.length; i += 2) {
      let dataSet = [];
      dataSet[0] = parseInt(_formData[i][1], 10);
      dataSet[1] = _formData[i + 1][1];
      data.push(dataSet);
    }

    fetch("/data/addNewProduct", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      console.log(res.status);
      this.props.handleAddBtn();
    });
  }

  render() {
    const { newProducts } = this.state;

    return (
      <div className="submit-modal">
        <div className="addProduct-box">
          <button
            className="close-btn"
            type="button"
            onClick={this.props.handleAddBtn}
          >
            <FontAwesomeIcon icon={faTimesCircle}></FontAwesomeIcon>
          </button>
          <div className="addProduct-header">
            <span>Create Account</span>
          </div>
          <div className="addProduct-content">
            <form onSubmit={this.handleSubmit}>
              <ol>
                {newProducts.map(row => (
                  <li key={row.id}>
                    <input
                      name={row.id}
                      type="number"
                      placeholder="Prodcut ID"
                      required
                      pattern="^[0-9]\d*$"
                    />
                    <div className="addProduct-content-img addProduct-img1">
                      <FontAwesomeIcon
                        className="addProduct-content-fa"
                        icon={faToolbox}
                      ></FontAwesomeIcon>
                    </div>
                    <input
                      name={row.company}
                      type="text"
                      placeholder="Company (Optional: fill NA instead)"
                      required
                      pattern=".*\S.*"
                    />
                    <div className="addProduct-content-img addProduct-img2">
                      <FontAwesomeIcon
                        className="addProduct-content-fa"
                        icon={faBuilding}
                      ></FontAwesomeIcon>
                    </div>
                  </li>
                ))}
              </ol>
              <button
                className="addProduct-add-btn"
                type="button"
                onClick={this.createNew}
              >
                ADD NEW
              </button>
              <button className="addProduct-submit-btn" type="submit">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProductModal;
