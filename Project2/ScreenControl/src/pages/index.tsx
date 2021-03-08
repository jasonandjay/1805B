import './index.less';
import RGL, { WidthProvider } from "react-grid-layout";
import AreaStackGradient from '@/components/AreaStackGradient';

const ReactGridLayout = WidthProvider(RGL);

export default function IndexPage() {
  const lgLayout = [
    {i: "1", x: 0, y: 0, w: 4, h:4},
    {i: "2", x: 2, y: 0, w: 2, h:2},
    {i: "3", x: 0, y: 2, w: 4, h:2},
    {i: "4", x: 4, y: 0, w: 4, h:4},
    {i: "5", x: 8, y: 0, w: 2, h:2},
    {i: "6", x: 10, y: 0, w: 2, h:2},
    {i: "7",x: 8, y: 2, w: 4, h:2}
  ]

  return (
    <ReactGridLayout className="layout" layout={lgLayout} rowHeight={50}>
      <div key="1">
        <AreaStackGradient/>
      </div>
      <div key="2">2</div>
      <div key="3">3</div>
      <div key="4">4</div>
      <div key="5">5</div>
      <div key="6">6</div>
      <div key="7">7</div>
  </ReactGridLayout>
  );
}
