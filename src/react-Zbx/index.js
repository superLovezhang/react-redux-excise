import React, { createContext, useState } from 'react'

const ReduxContext = createContext()

function Provider(props = {}) {
    const [refresh, setRefresh] = useState(Math.random)
    const { store, children } = props

    return <ReduxContext.Provider value={{state: store.state, dispatch: store.dispatch, setRefresh}}>
        {children}
    </ReduxContext.Provider>
}

function proxyDispatch(setRefresh, dispatch) {
    return (action) => {
        dispatch(action)
        setRefresh(Math.random())
    }
}

function connect(mapState, mapDispatch) {
    return (Component) => () => {
        return (
            <ReduxContext.Consumer>
                {({state, dispatch, setRefresh}) => {
                    return <Component {...{...mapState(state), ...mapDispatch(proxyDispatch(setRefresh, dispatch))}}/>
                }}
            </ReduxContext.Consumer>
        )
    }
}

export {
    Provider,
    connect
}