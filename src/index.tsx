import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, Store } from "redux"
import { DispatchType, ItemAction, ItemState } from './interfaces';

import thunk from "redux-thunk"
import { Provider } from 'react-redux'
import reducer from "./store/reducer"


const store: Store<ItemState, ItemAction> & {
  dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
