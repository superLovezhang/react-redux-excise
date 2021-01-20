import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import store from './store'
// import { Provider } from 'react-redux'

import store from './Zbx'
import { Provider } from './react-Zbx'

const Context = createContext('red')

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);