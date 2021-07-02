import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from "./App/index";
import * as serviceWorker from "./serviceWorker";
import menuReducer from "./store/reducers/menu";

import config from "./config";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

/*
import reducer from './store/reducers/index'
const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
    );
*/

const middleware = [thunk];
const store = createStore(
  menuReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);


const app = (
  <Provider store={store}>
    <BrowserRouter basename={config.basename}>
      {/* basename="/home-medical-care" */}
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
