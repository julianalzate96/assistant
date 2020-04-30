import * as React from 'react';
import RootNavigator from './src/navigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {store, persistor} from './src/redux/store';
import Loading from './src/components/loading';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loading/>}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}
