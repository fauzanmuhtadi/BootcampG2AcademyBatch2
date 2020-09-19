const initialState = {
    isLoggedIn: false,
    userMasuk: ""
}

const authRed = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                isLoggedIn: !state.isLoggedIn
            }
        case "LOGOUT":
            return {
                isLoggedIn: false
            }
        default:
            return state
    }
}

export default authRed;