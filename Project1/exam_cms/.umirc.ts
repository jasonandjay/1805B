import { defineConfig } from 'umi';

export default defineConfig({
  title: 'title',
  base: '/1805B/chenmanjie/exam/',
  publicPath: 'https://jasonandjay.com/1805B/chenmanjie/exam/',
  hash: true,
  nodeModulesTransform: {
    type: 'none',
  },
  headScripts: [
    {
      content: `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?405bfe479fe89b2d71893f3f773a17e2";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`
    }
  ],
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  dynamicImport: {},
  antd: {
    dark: false
    // compact: false
  },
  dva: {
    immer: true,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    title: true,
    baseNavigator: true,
    baseSeparator: '-',
  },
});
