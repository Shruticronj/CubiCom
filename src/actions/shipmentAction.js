import * as types from "./actionTypes";
import ShipmentApi from "../api/shipmentApi";

export function GetShipmentDetails() {
  return function (dispatch) {
    dispatch(getShipmentInitiation());
    return ShipmentApi.GetShipmentDetails()
      .then((getResponse) => {
           console.log("Shipment response-->>", getResponse.data);
        if (getResponse.data.status === "SUCCESS") {
          dispatch(getShipmentSuccess(getResponse.data.shipmentDetails));
        } else {
          console.log('error',getResponse.data)
          dispatch(getShipmentError(getResponse.data));
        }
      })
      .catch((error) => {
        dispatch(getShipmentError(error));
      });
  };
}
export function getShipmentInitiation() {
  return {
    type: types.SHIPMENT_INITIATED,
  };
}
export function getShipmentSuccess(ShipmentDetails) {
  return {
    type: types.SHIPMENT_SUCCESS,
    ShipmentDetails,
  };
}
export function getShipmentError(ShipmentError) {
  return {
    type: types.SHIPMENT_FAILURE,
    ShipmentError,
  };
}
