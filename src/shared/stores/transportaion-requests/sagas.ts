import { call, put, takeLatest } from 'redux-saga/effects';

import { GetTransportationRequests } from './actions';
import { TransportationRequestsService } from '../../services/transportation-requests.service';
import { TransportationRequest } from '../../models/transportation-request';

function* getTransportationRequests() {
  try {
    const transportationRequests: TransportationRequest[] = yield call(TransportationRequestsService.findAll);

    yield put(GetTransportationRequests.successAction(transportationRequests));
  } catch (error) {
    yield put(GetTransportationRequests.failureAction(error));
  }
}

export const transportationRequestSagas = [takeLatest(GetTransportationRequests.base, getTransportationRequests)];
