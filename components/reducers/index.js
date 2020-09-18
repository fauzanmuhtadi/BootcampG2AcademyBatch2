import { combineReducers } from "redux";
import authRed from "./auth/auth";
import simpenData from "./data/data";
// import addEmploy from "./addemployee/addemployee";

const AllReducers = combineReducers({
    auth: authRed,
    data: simpenData,
    // addemployee: addEmploy
})

export default AllReducers;