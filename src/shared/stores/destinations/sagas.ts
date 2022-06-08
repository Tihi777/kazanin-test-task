import { call, put, takeLatest } from 'redux-saga/effects';

import { GetDestinations } from './actions';
import { Destination } from '../../models/destination';
import { DestinationsService } from '../../services/destinations.service';

function* getDestinations() {
  try {
    const destinations: Destination[] = yield call(DestinationsService.findAll);

    yield put(GetDestinations.successAction(destinations));
  } catch (error) {
    yield put(GetDestinations.failureAction(error));
  }
}

export const destinationSagas = [takeLatest(GetDestinations.base, getDestinations)];
