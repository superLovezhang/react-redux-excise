import React from "react"
// import { connect } from 'react-redux'
import { connect } from './react-Zbx'

function App(props) {
    const { Dispatch, state } = props

    return (
        <div className="App">
            hello react {state.userReducer.age}
            <button onClick={() => Dispatch({type: 'INCREASE'})}>增加年龄</button>
            <button onClick={() => Dispatch({type: 'DECREASE'})}>减少年龄</button>
        </div>
    );
}



function mapStateToProps(state) {
    return { state }
}

function mapDispatchToProps(dispatch) {
    return {
        Dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)