// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import AHDjs from "ahdjs";
// import "ahdjs/build/css/index.css";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import PagePilot AHDjs and its styles
import AHDjs from "ahdjs";
import "ahdjs/build/css/index.css";

// Initialize PagePilot AHDjs once when the application starts
const ahdJS = new AHDjs(undefined, {
  applicationId: "6336128a251dcbda38bd8fe1",
  apiHost: "https://pagepilot.fabbuilder.com",
  visitorId: "visitor-id",
  language: "en",
  showProgressbar: false,
});

// Load the PagePilot site map
ahdJS.initializeSiteMap();

// Show PagePilot highlights for the selected target page
// Replace "target-page" with your actual Target Page
ahdJS.showHighlights("/about-us", true);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);