import auth from "./auth";
import bookingReducer from "./bookingReducer";
import { combineReducers } from "redux";
import customerReducer from "./customerReducer";
import message from "./message";

export default combineReducers({
  auth,
  message,
  bookingsData:bookingReducer,
  customersData:customerReducer
});
