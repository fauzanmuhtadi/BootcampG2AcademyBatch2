import { combineReducers } from "redux";
import authRed from "./auth/auth";
// import loGin from "./login/login";
// import addEmploy from "./addemployee/addemployee";

const AllReducers = combineReducers({
    auth: authRed,
    // login: loGin,
    // addemployee: addEmploy
})

export default AllReducers;