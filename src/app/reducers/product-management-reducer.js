const initialState = [{ name: 'Sony Bravia', prict: 30 }];

const productManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return [...state, action.payload];
        default:
            return state;
    }
}
export default productManagementReducer;