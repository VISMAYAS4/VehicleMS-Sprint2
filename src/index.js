import './index.css';

import { applyMiddleware, createStore } from 'redux'

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import reducer from "./store/customerReducer"
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk';

const logger = (store) => (next) => (action) => {
  console.log("Action fired", action);
  next(action);
}
const store = createStore(reducer, applyMiddleware(thunk, logger));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
