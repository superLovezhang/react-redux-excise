const userReducer = (state = { name: '张三', age: 18 }, action) => {
    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                age: ++state.age
            }
        case "DECREASE":
            return {
                ...state,
                age: --state.age
            }
    }
}

export default userReducer