import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';
import AsyncStorage from '@react-native-community/async-storage';
import rootReducer from './reducers';

const enhacers = [
  applyMiddleware(
    createLogger({
      collapsed: true
    }),
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
];

const composeEnhacers = compose()

const enhacer = composeEnhacers(...enhacers);

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = createStore(
//   persistedReducer,
//   applyMiddleware(createLogger()),
// );
export const store = createStore(persistedReducer, {}, enhacer);
export const persistor = persistStore(store);
