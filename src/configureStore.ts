import { createStore, applyMiddleware, compose } from 'redux';

function configureStore() {
  return createStore(compose());
}

export default configureStore();
