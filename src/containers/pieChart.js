import React, { Component } from "react";
import Chart from "react-apexcharts";
import PieIcon from "../assets/img/pie.png";
import Box from "../components/box";
import "../css/style.css";

export default class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      icon: PieIcon,
      heading: "Shipment Statistics",
    };
  }

  render() {
    const { pieData } = this.props;
    let series = [];
    let sum1 = 0,
      sum2 = 0;
    pieData.delivered.forEach((element) => {
      sum1 = sum1 + element;
    });

    pieData.undelivered.forEach((element) => {
      sum2 = sum2 + element;
    });
    series.push(sum1, sum2);
    let chartOptions = {
      colors: ["#6AE47E", "#F77A1B"],
      labels: ["Delivered", "Undelivered"],
      legend: {
        position: "bottom",
      },
    };

    return (
      <div>
        <Box h_icon={this.state.icon} heading={this.state.heading} />
        <div id="chart" className="box-container">
          <Chart
            options={chartOptions}
            series={series}
            type="pie"
            width={300}
          />
        </div>
      </div>
    );
  }
}
