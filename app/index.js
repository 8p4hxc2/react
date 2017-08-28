import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Home from 'components/home';
import Vod from 'components/vod';
import reducers from 'reducers';
import createHistory from 'history/createBrowserHistory'
import {Route} from 'react-router'
import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'

const store = createStore(reducers);
const history = createHistory();
const middleware = routerMiddleware(history);

store.dispatch({type: 'RANDOM'});

render(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <div>
      <Route exact={true} path='/' component={Home}/>
      <Route path='/vod' component={Vod}/>
    </div>
  </ConnectedRouter>
</Provider>, document.getElementById('container'));
