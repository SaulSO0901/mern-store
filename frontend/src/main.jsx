import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css"
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from '@clerk/clerk-react'
const PUBLISHABLE_KEY ="";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
			<ChakraProvider>
	
      <App />

			</ChakraProvider>
			</ClerkProvider>
		</BrowserRouter>
	</React.StrictMode>
);
