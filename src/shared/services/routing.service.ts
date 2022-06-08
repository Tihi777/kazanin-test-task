import { HttpService } from './http-service';

class RoutingServiceImpl {
  private baseUrl: string = 'https://routing.openstreetmap.de';

  public async getRoutes(from: number[], to: number[]): Promise<any> {
    return await HttpService.get<any>(`/routed-car/route/v1/driving/${from};${to}`, {
      baseURL: this.baseUrl,
      params: { overview: false, steps: true },
    }).then((resp) => resp.data);
  }
}

export const RoutingService = new RoutingServiceImpl();
