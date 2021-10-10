import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware, Store } from "redux"
import { DispatchType, DispatchType2, ItemAction, ItemState, ListAction, MainState } from './interfaces';

import thunk from "redux-thunk"
import { Provider } from 'react-redux'
import reducer from "./store/reducer"


const store: Store<MainState, ListAction> & {
  dispatch: DispatchType2
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
