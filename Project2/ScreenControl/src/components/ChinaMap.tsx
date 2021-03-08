import { Scene, PointLayer } from "@antv/l7";
import { Mapbox, GaodeMap } from "@antv/l7-maps";
import { useEffect } from 'react';

export default function ChinaMap() {
  useEffect(() => {
    const scene = new Scene({
      id: "china",
      map: new Mapbox({
        pitch: 0,
        style: "light",
        center: [116.3683244,39.915085],
        zoom: 2
      })
    });
  }, [])

  return <div id="china"></div>
}

