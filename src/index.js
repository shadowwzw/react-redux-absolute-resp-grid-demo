import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './containers/App'
import * as config from './config';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer, composeWithDevTools(
    applyMiddleware(...middleware)
  )
);

render(
  <Provider store={store}>
    <App config={config} />
  </Provider>,
  document.getElementById('root')
);
