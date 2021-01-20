import { createStore, combineReducers } from  './core'

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
        default: return state
    }
}

const employeeReducer = (state = { salary: 5000, card: 1 }, action) => {
    switch (action.type) {
        case "JIA":
            return {
                ...state,
                salary: state.salary + 1000
            }
        case "JIAN":
            return {
                ...state,
                salary: state.salary - 1000
            }
        default: return state
    }
}

const reducer = combineReducers({
    userReducer,
    employeeReducer
})

export default createStore(reducer)