import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
//import * as actionCreators from "../actions/action-creators";
import { LayoutContainer } from "./layout-container";


const mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.userManagementReducer,
        products: []
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actionCreators, dispatch);
// }

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (payload) => {
            dispatch({ type: 'ADD_USER', payload: payload })
        },
        addProduct: (payload) => {
            dispatch({ type: 'ADD_PRODUCT', payload: {} })
        }
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);

