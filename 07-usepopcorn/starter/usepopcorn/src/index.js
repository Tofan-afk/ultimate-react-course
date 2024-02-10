import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App />  */}
    <StarRating
      maxRating={5}
      defaultRating={3}
      className="test"
      messages={["terrible", "bad", "ok", "nice", "excellent"]}
    />
    <StarRating maxRating={5} className="test" />
  </React.StrictMode>
);
