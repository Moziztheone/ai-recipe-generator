import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx"; // Changed from App.jsx to App.tsx
import "./index.css";
import { Authenticator } from "@aws-amplify/ui-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);
