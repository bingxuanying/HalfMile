import React, { Component } from "react";

class FooterColumn extends Component {
  constructor() {
    super();
  }
  render() {
    const boxHeader = this.props.header;
    const boxContent = this.props.content;
    return (
      <div className="footer-box">
        <h4>{boxHeader}</h4>
        <ul>
          {boxContent.map(data => (
            <li key={data}>{data}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FooterColumn;
