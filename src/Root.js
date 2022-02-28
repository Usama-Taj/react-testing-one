import React from "react";
import { Provider } from "react-redux";
import reducers from "reducers";
import { createStore } from "redux";

export default ({ initialState = {}, children }) => (
  <Provider
    store={createStore(
      reducers,
      !!Object.keys(initialState).length
        ? initialState
        : window.window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    {children}
  </Provider>
);
