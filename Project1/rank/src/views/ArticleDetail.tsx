import React,{useEffect} from 'react'
import { useObserver } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom';
import useQueryString from '../hooks/useQueryString'
import useStore from '../context/useStore';

const ArticleDetail: React.FC = ()=>{
    let history = useHistory();
    let id = useQueryString(history.location.search, 'id');
    let {article} = useStore();

    useEffect(()=>{
        article.getArticleDetail(id);
    }, [])

    console.log('detail...', article.detail);
    return useObserver(()=>
        <div>
            <p>{JSON.stringify(article.detail)}</p>
            <iframe title={article.detail.title} src={article.detail.url}></iframe>
        </div>
    )
};

export default ArticleDetail;