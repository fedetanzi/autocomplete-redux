import React from 'react'
import { render } from 'react-dom'
import {compose, applyMiddleware, createStore} from 'redux'
import {persistStore, autoRehydrate} from 'redux-persist'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import localForage from 'localforage'
import { createLogger } from 'redux-logger'
import reducers from './reducers'
import App from './containers/App'

const middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = compose(
    applyMiddleware(...middleware),
    autoRehydrate()
)(createStore)(reducers);


persistStore(store, {storage: localForage});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
