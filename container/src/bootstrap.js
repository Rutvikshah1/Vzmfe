import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './App.module.css';

import store from './store';

window.containerStore = store;

const mount = (el) => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    el
  );
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#root');

  if (devRoot) {
    mount(devRoot);
  }
}

// We are running through container
// and we should export the mount function
export { mount };
