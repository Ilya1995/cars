import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import { Provider } from 'react-redux';
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
    <NotificationContainer />
  </Provider>,
  document.getElementById('root')
);
