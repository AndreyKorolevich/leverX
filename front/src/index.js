import './Styles/style.scss';
import './Styles/header.scss';
import './Styles/main.scss';
import './Styles/hint.scss';
import './Styles/form.scss';
import './Styles/loader.scss';
import './Styles/requests.scss';
import './Styles/modal.scss';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import React from 'react';
import { Provider } from 'react-redux';
import App from './Components/App';
import store from './redux/store';

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </HashRouter>, document.getElementById('root'),
);
