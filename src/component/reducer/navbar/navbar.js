const initialState = {
    isLogin: false,
    userMasuk: ""
}

const navBar = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                isLogin: !state.isLogin
            }
        case "LOGOUT":
            return {
                isLogin: false
            }
        default:
            return state
    }
}

export default navBar;