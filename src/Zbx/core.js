function createStore(reducer) {
    let store = {
        state: undefined,
        listeners: []
    }
    /*订阅 当被dispatch将触发回调*/
    Object.defineProperty(store, 'subscribe', {
        value: (fn) => {
            store.listeners.push(fn)
        },
        writable: false,
    })
    /*触发一个action*/
    Object.defineProperty(store, 'dispatch', {
        value: (action) => {
            store.state = reducer(store.state, action)
            store.listeners.forEach(listener => listener())
        },
        writable: false,
    })
    /*获取所有reducer的state*/
    Object.defineProperty(store, 'getState', {
        value: () => {
            return store.state
        },
        writable: false
    })

    /*初始化state*/
    store.state = reducer()

    return store
}

function combineReducers(reducers = {}) {
    return (state = {}, action = {}) => {
        let result = {}
        for (let stateName in reducers) {
            result[stateName] = reducers[stateName](state[stateName], action)
        }
        return result
    }
}

export {
    createStore,
    combineReducers
}