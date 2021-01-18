import {action, observable} from 'mobx'
import { getArticleDetail } from '../../services/index';

class Article{
    @observable
    detail:{[key:string]: string} = {};

    @action
    async getArticleDetail(articleId: string){
        let result = await getArticleDetail(articleId)
        if (result){
            this.detail = result.data;
        }
    }
}

export default Article;