import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import rootReducer from "./store/reducers/movie"; // Import your Redux root reducer

// Create a Redux store
const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap your App component with Provider to provide access to the Redux store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
