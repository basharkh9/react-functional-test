import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // this strict mode with react 18 causes mounting then unmounting then mounting to make sure that
  // our component is resilient to mounting and unmounting which leed to double useEffect Call
  // it is just in development not in production
  // it usefull when you use intervals by setInterval function
  // refer to this link : https://github.com/basharkh9/react-strict-mode
  // and this : https://reactjs.org/docs/strict-mode.html
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
