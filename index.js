import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';

import reducers from './src/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);
const createStoreWithMiddleware = createStore(reducers, composeEnhancers(applyMiddleware(promiseMiddleware)));

const appRedux = () => {
  return (
      <Provider store={createStoreWithMiddleware}>
        <App/>
      </Provider>
  )
}

AppRegistry.registerComponent(appName, () => appRedux);
