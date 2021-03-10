import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'

// 引入子模块
import index from './modules/index'
Vue.use(Vuex)


export default new Vuex.Store({
    state: {},  // 全局状态
    getters: {}, // 全局派生数据
    mutations: {},  // 同步改变
    actions: {}, // 异步改变
    modules: {
        index
    },   // 子状态
    plugins: [logger()]
});