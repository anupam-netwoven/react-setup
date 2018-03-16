// export const addUser = (payload) => {
//     setTimeout(() => {
//         return { type: 'ADD_USER', payload: payload }
//     }, 2000)
//     return { type: 'ADD_USER_TEMP', payload: payload }
// }

export const addProduct = (payload) => {
    return { type: 'ADD_PRODUCT', payload: payload }
}

export const addUser = (payload) => {
    return (dispatch) => {
        dispatch({ type: 'ADD_USER_IN_PROGRESS', payload: payload })
        setTimeout(() => {
            dispatch({ type: 'ADD_USER', payload: payload })
        }, 3000)
    };
}