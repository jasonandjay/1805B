import request from '../utils/request';

const mid = 'fa291cbd52aa40d2b47ba96c8ec59c99';
// 文章详情
export let getArticleDetail = (articleId: string)=>{
    return request.post('/api/service/articleDetail', {mid, articleId});
}

// 文章评论
export let getArticleComment = (articleId: string, pageNo=1)=>{
    return request.post('/api/service/articleCommentPage', {mid, articleId, pageNo});
}