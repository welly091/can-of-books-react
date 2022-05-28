import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_DOMAIN}
    clientId={process.env.REACT_APP_CLIENTID}
    redirectUri={process.env.REACT_APP_REDIR}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);