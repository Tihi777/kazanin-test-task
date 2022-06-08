import React from 'react';
import { Provider } from 'react-redux';

import { TransportationRequestsPage } from './modules/transportation-requests';
import { store } from './shared/stores/store';

function App() {
  return (
    <Provider store={store}>
      <TransportationRequestsPage />;
    </Provider>
  );
}

export default App;
