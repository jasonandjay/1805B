// 引入模块
import Mine from './module/mine';
import Global from './module/global';

let store = {
    mine: new Mine(),
    global: new Global()
}

export default store;