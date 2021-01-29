import { defineConfig } from 'umi';

export default defineConfig({
  title: 'title',
  nodeModulesTransform: {
    type: 'none',
  },
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
