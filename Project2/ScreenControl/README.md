# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

# 大屏可视化
## 相关技术
- 自适应字体大小：rem(屏幕宽度基准参考设计稿宽度)
- 拖拽/自适应布局：grid-layout(vue-grid-layout, react-grid-layout)
- 图表/地图可视化：echart, hightchart, antv
- 数据实时更新：socket, 轮询

## echart使用方式
- 初始化echart实例，new Ecahrt(dom, theme, option: {renderer: 'svg'|'canvas'})
- 配置echart选项options
- 设置echart, chart.setOption(options)
