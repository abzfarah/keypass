import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import routes from './routes'
import App from './App';
import './index.css';

ReactDOM.render(
   <Router routes={routes} history={browserHistory} />
    ,
  document.getElementById('root')
);
