import React from 'react';
import ReactDOM from 'react-dom';
import Educaid from './components/Educaid';
import 'normalize.css/normalize.css';
import './styles/styles.css';
import {Auth0Provider} from '@auth0/auth0-react'


const domain = 'dev-gaqtui-1.eu.auth0.com';
const clientId = 'Bwdl6W2HqaowkUKU2vcebOI9dmK4KTPV';


ReactDOM.render(
  <Auth0Provider domain={domain} clientId={clientId} redirectUri={window.location.origin+'/myzone'}>
    <Educaid/>
  </Auth0Provider>,
  document.getElementById('app')
);
