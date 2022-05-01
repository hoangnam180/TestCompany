/** @format */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WrapperProvider from "./context/itemmovie-context";

const rootNode = document.getElementById('root');
ReactDOM.render(
<React.StrictMode> 
    <WrapperProvider>
      <App />
    </WrapperProvider>
</React.StrictMode>, rootNode);

