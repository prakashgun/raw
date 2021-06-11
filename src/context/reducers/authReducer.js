const authReducer = (state, { type, payload }) => {
    switch (type) {
        case 'Register Loading':
            console.log('reg loading state', state)
            return { ...state, loading: true }
        case 'Register Success':
            return { ...state, loading: false, data: payload }
        case 'Register Fail':
            return { ...state, loading: false, error: payload }
        case 'Clear Auth State':
            return { ...state, loading: false, error: null, data: null }
        default:
            return state
    }
}

export default authReducer