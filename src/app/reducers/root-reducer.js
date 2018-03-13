import { combineReducers } from "redux";
import userManagementReducer from './user-management-reducer';
import productManagementReducer from './product-management-reducer';


const rootReducer = combineReducers({
    userManagementReducer,
    productManagementReducer
});

export default rootReducer;