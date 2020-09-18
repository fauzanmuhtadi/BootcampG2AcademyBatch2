const initialState = {
    nihData: []
}

const simpenData = (state = initialState, action) => {
    switch (action.type) {
        case "DATAS":
            return {
                nihData: action.photos
            }
        default:
            return state
    }
}

export default simpenData;