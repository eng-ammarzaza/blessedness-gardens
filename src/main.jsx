import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BookingInfoProvider } from "./contexts/BookingInfoContext.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.replace("/")}
    >
      <BookingInfoProvider>
        <App />
      </BookingInfoProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
