import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";   // ✅ ADD THIS
import { AppProvider } from "./context/AppContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>        {/* ✅ REQUIRED */}
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
);