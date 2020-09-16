import { combineReducers } from "redux";
import navBar from "./navbar/navbar";
import loGin from "./login/login";
import addEmploy from "./addemployee/addemployee";

const AllReducers = combineReducers({
    navbar: navBar,
    login: loGin,
    addemployee: addEmploy
})

export default AllReducers;