import React, { Component } from "react";
import totalIcon from "../assets/img/total.png";
import Box from "../components/box";
import "../css/style.css";

export default class TotalShipment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "Total Shipment",
      icon: totalIcon,
    };
  }

  render() {
    const { totalData } = this.props;
    return (
      <div>
        <Box h_icon={this.state.icon} heading={this.state.heading} />
        <div className="shipment-box">
          <p className="shipment-value">{totalData.totalShipment}</p>
          <p className="shipment-text">Total no. of Shipments</p>
        </div>
      </div>
    );
  }
}
