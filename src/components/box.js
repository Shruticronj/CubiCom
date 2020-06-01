import React, { Component } from "react";
import "../css/style.css";

export default class Box extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { h_icon, heading } = this.props;
    return (
      <div className="box-container-heading">
        <div className="box-heading">
          <img src={h_icon} width="20px" height="20px" />
          <p className="heading">{heading}</p>
        </div>
      </div>
    );
  }
}
