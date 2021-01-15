import {action, observable} from 'mobx'
import {getHotList, getSearchList, getSearchTips} from '../../services'
import {ISearchArticleItem, ISearchRankItem} from '../../utils/interface'

class Search{
    @observable
    hotList: string[] = []
    @observable
    historyList: string[] = []

    @observable
    searchRankList: ISearchRankItem[] = []
    @observable
    searchArticleList: ISearchArticleItem[] = []
    @observable
    searchRecommendRankList: ISearchRankItem[] = []
    @observable
    searchRecommendArticleList: ISearchArticleItem[] = []
    
    @observable
    searchTipList: string[] = []


    @action
    async getHotList(){
        let result = await getHotList();
        if (result){
            this.hotList = result.data.dataList
        }   
    }

    @action
    async getSearchResult(keyword: string){
        let result = await getSearchList(keyword);
        if (result){
            debugger
            this.searchRankList = result.data.rankList;
            this.searchArticleList = result.data.articleList;
            this.searchRecommendRankList = result.data.recommendRankList;
            this.searchRecommendArticleList = result.data.recommendArticleList;
        }
    }

    @action
    async getSearchTips(keyword: string){
        let result = await getSearchTips(keyword);
        if (result){
            this.searchTipList = result.data.dataList;
        }
    }

    @action
    getHistoryList(){
        let history: string | string[] = localStorage.getItem('search_history');
        if (history){
            history = JSON.parse(history)
        }else{
            history = [];
        }
        this.historyList = history as string[];
    }

    @action
    clearHistoryList(){
        localStorage.removeItem('search_history');
    }
}

export default Search;