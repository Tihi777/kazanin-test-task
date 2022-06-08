import { all } from 'redux-saga/effects';

import { transportationRequestSagas } from './transportaion-requests';
import { destinationSagas } from './destinations';

export default function* rootSaga() {
  yield all([...transportationRequestSagas, ...destinationSagas]);
}
