// 引入模块
import Mine from './module/mine';
import Global from './module/global';
import Search from './module/search';
import Article from './module/article';


let store = {
    mine: new Mine(),
    global: new Global(),
    search: new Search(),
    article: new Article()
}

export default store;