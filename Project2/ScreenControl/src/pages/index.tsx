import './index.less';
import RGL, { WidthProvider } from "react-grid-layout";
import { useEffect, useState } from 'react';
import {useDebounceCallback} from '@react-hook/debounce'

import AreaStackGradient from '@/components/AreaStackGradient';
import LineStack from '@/components/LineStack';
import ChinaMap from '@/components/ChinaMap';
import ProvinceMap from '@/components/ProvinceMap';


const ReactGridLayout = WidthProvider(RGL);

export default function IndexPage() {
  let [width, setWidth] = useState(window.innerWidth);
  const lgLayout = [
    {i: "1", x: 0, y: 0, w: 4, h:4},
    {i: "2", x: 4, y: 0, w: 4, h:6},
    {i: "3", x: 8, y: 0, w: 4, h:6},
    {i: "4", x: 4, y: 0, w: 4, h:4},
    {i: "5", x: 8, y: 0, w: 2, h:2},
    {i: "6", x: 10, y: 0, w: 2, h:2},
    {i: "7",x: 8, y: 2, w: 4, h:2}
  ]

  // 对宽度的设置使用防抖，默认100ms
  const handleWidth = useDebounceCallback(()=>{
      setWidth(window.innerWidth);
  })
  useEffect(()=>{
    window.addEventListener('resize', ()=>{
      handleWidth();
    })
  }, );

  return (
    <ReactGridLayout key={width} className="layout" layout={lgLayout} rowHeight={50} isDraggable={false}>
      <div key="1">
        <AreaStackGradient/>
      </div>
      <div key="2">
        <LineStack />
      </div>
      <div key="3">
        <ChinaMap />
      </div>
      <div key="4">
        <ProvinceMap />
      </div>
      <div key="5">5</div>
      <div key="6">6</div>
      <div key="7">7</div>
  </ReactGridLayout>
  );
}
