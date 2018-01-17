import {compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'remote-redux-devtools';
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers = composeWithDevTools({ realtime: true });

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware, logger)
    // other store enhancers if any
));

sagaMiddleware.run(rootSaga);


if (module.hot) {
    module.hot.accept(() => {
        store.replaceReducer(require('./../reducers').default);
    });
}
export default store;
