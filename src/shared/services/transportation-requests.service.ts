import { TransportationRequest } from '../models/transportation-request';
import { HttpService } from './http-service';

class TransportationRequestsServiceImp {
  public async findAll(): Promise<TransportationRequest[]> {
    return await HttpService.get<TransportationRequest[]>('/requests').then((resp) => resp.data);
  }

  public async update(id: number, updateTransportationRequestDto: any): Promise<TransportationRequest[]> {
    return await HttpService.put<TransportationRequest[]>(`/requests/${id}`, updateTransportationRequestDto).then((resp) => resp.data);
  }
}

export const TransportationRequestsService = new TransportationRequestsServiceImp();
