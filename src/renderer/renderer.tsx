/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import '../../public/index.scss';

ReactDOM.render(<App/>, document.getElementById('root'));

serviceWorker.register();
