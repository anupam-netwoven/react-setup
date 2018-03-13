import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
//import * as actionCreators from "../actions/action-creators";
import { LayoutContainer } from "./layout-container";


function mapStateToProps(state) {
    debugger;
    return {
        users: state.userManagementReducer,
        products: []
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actionCreators, dispatch);
// }

function mapDispatchToProps(dispatch) {
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

