import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';


export default class App extends React.Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCz4Hu2yaSLt1gDxX4iV1FIZc8p79CuySw',
      authDomain: 'auth-38091.firebaseapp.com',
      databaseURL: 'https://auth-38091.firebaseio.com',
      projectId: 'auth-38091',
      storageBucket: 'auth-38091.appspot.com',
      messagingSenderId: '830687680296'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}