import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Home from 'components/home';
import Vod from 'components/vod';
import reducers from 'reducers';
import {timerMiddleware} from 'middlewares';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

const store = createStore(reducers, applyMiddleware(timerMiddleware));
const history = createHistory();
//const middleware = routerMiddleware(history);

store.dispatch({ type: 'RANDOM' });
store.dispatch({ type: 'RAIL' });

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route exact={true} path='/' component={Home} />
        <Route path='/vod' component={Vod} />
      </div>
    </ConnectedRouter>
  </Provider>, document.getElementById('container'));
