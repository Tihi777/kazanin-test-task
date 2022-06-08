import { HttpService } from './http-service';

class RoutingServiceImpl {
  private baseUrl: string = 'http://dev.virtualearth.net';

  public async getRoutes(from: number[], to: number[]): Promise<any> {
    return await HttpService.get<any>(`/REST/v1/Routes/Driving`, {
      baseURL: this.baseUrl,
      params: {
        'wayPoint.1': from.toString(),
        'wayPoint.2': to.toString(),
        routeAttributes: 'routePath',
        key: process.env.REACT_APP_BING_MAP_KEY,
      },
    }).then((resp) => resp.data);
  }
}

export const RoutingService = new RoutingServiceImpl();
