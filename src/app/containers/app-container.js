import { connect } from "react-redux";
//import { bindActionCreators } from "redux";
//import * as actionCreators from "../actions/action-creators";
import { LayoutContainer } from "./layout-container";


function mapStateToProps(state) {
    return {
        users: state.userManagementReducer,
        products: state.productManagementReducer
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
            dispatch({ type: 'ADD_PRODUCT', payload: payload })
        }
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);

