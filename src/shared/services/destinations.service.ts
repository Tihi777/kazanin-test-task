import { HttpService } from './http-service';
import { Destination } from '../models/destination';

class DestinationsServiceImpl {
  public async findAll(): Promise<Destination[]> {
    return await HttpService.get<Destination[]>('/destinations').then((resp) => resp.data);
  }
}

export const DestinationsService = new DestinationsServiceImpl();
