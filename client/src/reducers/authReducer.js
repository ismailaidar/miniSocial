const initialState = {
    authenticated: false, 
    user: {}
}

export default function(state=initialState, action) {
    switch (action.type) {
        default:
            return state;
            break;
    }
}