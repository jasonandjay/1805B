// 引入模块
import Mine from './module/mine';
import Global from './module/global';
import Search from './module/search';

let store = {
    mine: new Mine(),
    global: new Global(),
    search: new Search()
}

export default store;