import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./components/counter";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: DB2aaS</div>
    <div>Framework: react</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div>
    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
