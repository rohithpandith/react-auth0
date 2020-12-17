import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Auth0Provider } from '@auth0/auth0-react';

const domain = 'dev-inflame.us.auth0.com';
const clientID = 'iR2ECPPEqGgI9ngoIVPfOb9iVOjzGiOy';

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
