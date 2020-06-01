import * as types from "../actions/actionTypes";

const initialState = {
  shipmentData: {},
};
const shipmentReducers = (state = initialState, actions) => {
  switch (actions.type) {
    case types.SHIPMENT_INITIATED:
      return {
        ...state,
        IsShipmentLoading: true,
        IsShipmentError: false,
        IsShipmentSuccess: false,
      };

    case types.SHIPMENT_SUCCESS:
      return {
        ...state,
        IsShipmentLoading: false,
        IsShipmentError: false,
        IsShipmentSuccess: true,
        shipmentData: actions.ShipmentDetails,
      };

    case types.SHIPMENT_FAILURE:
      return {
        ...state,
        IsShipmentLoading: false,
        IsShipmentError: true,
        IsShipmentSuccess: false,
      };

    default:
      return state;
  }
};

export default shipmentReducers;
