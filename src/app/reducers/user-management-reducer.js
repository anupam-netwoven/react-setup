const initialState = [{ name: 'Al Pacino', age: 65 }];

const userManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return [...state, action.payload];
        default:
            return state;
    }
}
export default userManagementReducer;