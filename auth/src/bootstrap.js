import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import store from './store';

const mount = (el, { onNavigate } = {}) => {
  const history = createMemoryHistory();

  // if (onNavigate) {
  history.listen(onNavigate);
  // }

  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    el
  );
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

export { mount };
