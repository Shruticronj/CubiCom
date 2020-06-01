import React, { Component } from "react";
import { connect } from "react-redux";
import { GetShipmentDetails } from "../actions/shipmentAction";
import BarChart from "./barChart";
import PieChart from "./pieChart";
import TotalShipment from "./totalShipment";
import "../css/style.css";
import Draggable from "react-draggable";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      activeDrags: 0,
      deltaPosition: {
        x: 0,
        y: 0,
      },
      controlledPosition: {
        x: -400,
        y: 200,
      },
    };
  }
  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition;
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY,
      },
    });
  };

  onStart = () => {
    this.setState({ activeDrags: this.state.activeDrags + 1 });
  };

  onStop = () => {
    this.setState({ activeDrags: this.state.activeDrags - 1 });
  };

  // For controlled component
  adjustXPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { x, y } = this.state.controlledPosition;
    this.setState({ controlledPosition: { x: x - 10, y } });
  };

  adjustYPos = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { controlledPosition } = this.state;
    const { x, y } = controlledPosition;
    this.setState({ controlledPosition: { x, y: y - 10 } });
  };

  onControlledDrag = (e, position) => {
    const { x, y } = position;
    this.setState({ controlledPosition: { x, y } });
  };

  onControlledDragStop = (e, position) => {
    this.onControlledDrag(e, position);
    this.onStop();
  };

  componentDidMount() {
    this.props.GetShipmentDetails();
  }

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    const { deltaPosition, controlledPosition } = this.state;
    if (
      Object.keys(this.props.shipmentData).length === 0 &&
      this.props.shipmentData.constructor === Object
    ) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="dashboard">
          <div className="total-pie-container">
            <Draggable {...dragHandlers}>
              <div className="pie-right">
                <TotalShipment totalData={this.props.shipmentData} />
              </div>
            </Draggable>

            <Draggable {...dragHandlers}>
              <div className="pie-left">
                <PieChart pieData={this.props.shipmentData} />
              </div>
            </Draggable>
          </div>
          <div className="bar-container">
          <Draggable {...dragHandlers}>
            <div style={{ width: "50.5%", marginTop: "6px",cursor: "all-scroll" }}>
              <BarChart barData={this.props.shipmentData} />
            </div>
          </Draggable>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    shipmentData: state.shipmentData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetShipmentDetails: () => {
      dispatch(GetShipmentDetails());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
