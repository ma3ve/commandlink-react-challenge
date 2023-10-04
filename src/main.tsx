import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createStore } from "redux";
import formReducer from "./reducers/formReducer.ts";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Result from "./Result.tsx";
const store = createStore(formReducer);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
