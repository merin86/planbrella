// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
// Import createRoot for rendering the React application
import { createRoot } from "react-dom/client";
// Import custom CSS for additional styling
import "./index.css";
// Import BrowserRouter for routing
import { BrowserRouter } from "react-router-dom";
import App from "./App";
// Import reportWebVitals for measuring performance
import reportWebVitals from "./reportWebVitals";
// Import CurrentUserProvider for user context
import { CurrentUserProvider } from "./contexts/CurrentUserContext";

// Get the root element from the HTML
const container = document.getElementById("root");
// Create a root to render the React application
const root = createRoot(container);

// Render the React application
root.render(
  <BrowserRouter>
    {/* Provide the user context to the entire app */}
    <CurrentUserProvider>
      {/* The main App component */}
      <App />
    </CurrentUserProvider>
  </BrowserRouter>
);

// Call reportWebVitals to measure performance
reportWebVitals();
