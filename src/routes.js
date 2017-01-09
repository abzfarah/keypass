import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App'
import List from './List'
import Favourites from './Favourites'

export default {
    path: '/',
    indexRoute: { component: Favourites  },
    component: App,
    childRoutes: [
        {
            path:'/list',
            component: List,
        },
        {
            path:'/favourites',
            component: Favourites,
        }
    ]
}