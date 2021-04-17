import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import Monochromize from "./components/Monochromize";
import reportWebVitals from "./tests/reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Monochromize />
      </Router>
    </React.StrictMode>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));
reportWebVitals();
