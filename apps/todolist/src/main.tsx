import React from 'react';
import store, { storeContext } from './store';
import ReactDOM from "react-dom";
import App from './app/app';
import AuthenticationProvider from './common/authenticationContext';

ReactDOM.render(
  <React.StrictMode>
    <storeContext.Provider value={store}>
      <AuthenticationProvider><App /></AuthenticationProvider>
      
    </storeContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

