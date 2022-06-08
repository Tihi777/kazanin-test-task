import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './root-saga';
import { transportationRequestsReducer } from './transportaion-requests';
import { destinationsReducer } from './destinations';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    transportationRequestsState: transportationRequestsReducer,
    destinationsState: destinationsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
