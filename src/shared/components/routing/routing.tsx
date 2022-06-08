import { ControlOptions } from 'leaflet';
import { Polyline } from 'react-leaflet';
import { FC, useEffect, useState } from 'react';
import { RoutingService } from '../../services/routing.service';

interface RoutingProps extends ControlOptions {
  from: [number, number];
  to: [number, number];
}

export const Routing: FC<RoutingProps> = ({ from, to }) => {
  const [state, setState] = useState([[]]);

  useEffect(() => {
    (async () => {
      const p = await RoutingService.getRoutes(from, to);
      setState(p);
    })();
  }, [from, to]);

  return <Polyline positions={state} />;
};
