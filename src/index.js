import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Module from './testmodule/module';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Module />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
