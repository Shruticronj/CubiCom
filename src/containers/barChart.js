import React, { Component } from "react";
import Chart from "react-apexcharts";
import barIcon from "../assets/img/bar.png";
import Box from "../components/box";
import "../css/style.css";

export default class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "Shipment Trends",
      icon: barIcon,
    };
  }

  render() {
    const { barData } = this.props;

    let delivered = [],
      undelivered = [];
    delivered = barData.delivered;
    undelivered = barData.undelivered;
    const options = {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false,
        },
      },
      colors: ["#6AE47E", "#F77A1B"],
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    };
    const series = [
      {
        name: "Delivered",
        data: delivered,
        colors: ["#FFB300"],
      },
      {
        name: "Undelivered",
        data: undelivered,
        colors: ["#E91E63"],
      },
    ];

    return (
      <div>
        <Box h_icon={this.state.icon} heading={this.state.heading} />
        <div className="app box-container">
          <div className="row">
            <div className="mixed-chart">
              <Chart options={options} series={series} type="bar" width="500" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
