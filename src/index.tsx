import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'Components/App';
import store from 'Redux/configureStore';
import 'bootstrap/dist/css/bootstrap.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.Suspense>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.Suspense>,
);
