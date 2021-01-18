import React, { useEffect, useState, memo, useMemo, useCallback } from 'react';
import useStore from '../context/useStore';
import { useObserver } from 'mobx-react-lite';
import SearchTip from '../components/SearchTip';
import useThrottle from '../hooks/useThrotte';
import { useHistory } from 'react-router-dom';

const WrapSearchTip = memo(SearchTip);
const Search: React.FC = () => {
    let { search } = useStore();
    let [searchText, setSearchText] = useState<string>('');
    let [count, setCount] = useState<string>('');
    let history = useHistory();

    // useEffect(()=>{
    //     setInterval(()=>{
    //         setCount(count=>count+1)
    //     }, 3000)
    // }, []);

    useEffect(() => {
        search.getHotList();
    }, [])

    useEffect(() => {
        search.getHistoryList();
    }, [])

    let searchTip = useThrottle(search.getSearchTips.bind(search))
    useEffect(() => {
        console.log('searchText...', searchText);
        // 获取搜索关键词提示
        searchTip(searchText);
    }, [searchText])

    function getSearchResult() {
        search.getSearchResult(searchText)
    }

    // useMemo包裹属性，当deps修改的时候recompute
    let wrapObj = useMemo(() => { return {} }, []);
    let wrapCb = useCallback(() => {
        return () => { }
    }, []);

    // 跳转排名详情
    function goRankDetail(e: React.MouseEvent) {
        if (e.target !== e.currentTarget) {
            let ele = e.target as HTMLElement;
            if (ele.tagName !== 'LI') {
                ele = ele.parentElement;
            }
            let id = ele.dataset.id;
            history.push('/rankDetail?id=' + id);
        }
    }

    // 跳转排名详情
    function goArticleDetail(e: React.MouseEvent) {
        if (e.target !== e.currentTarget) {
            let ele = e.target as HTMLElement;
            while(ele.tagName !== 'LI'){
                ele = ele.parentElement;
            }
            let id = ele.dataset.id;
            history.push('/articleDetail?id=' + id);
        }
    }
    return useObserver(() => <div>
        {/* 搜索框 */}
        <section>
            <input type="text" placeholder="请输入你要搜索的内容" value={searchText} onChange={e => setSearchText(e.target.value)} />
            <button onClick={getSearchResult}>搜索</button>
        </section>
        {/* 排名搜索结果 */}
        <section onClick={goRankDetail}>{
            search.searchRankList.map(item => {
                return <li key={item.id} data-id={item.id}>
                    <img src={item.image} alt="" />
                    <span>{item.name}</span>
                </li>
            })}</section>
        {/* 文章搜索结果 */}
        <section onClick={goArticleDetail}>{
            search.searchArticleList.map(item => {
                return <li key={item.id} data-id={item.id}>
                    <img src={item.image} alt="" />
                    <p>{item.title}</p>
                    <div>
                        <img src={item.avatar} alt="" />
                        <span>{item.nickname}</span>
                        <span>推荐值：{item.score}</span>
                    </div>
                </li>
            })}</section>
        {/* 关键词提示 */}
        <section>{
            search.searchTipList.map(item => {
                return <p key={item}>{item}</p>
            })}</section>
        <WrapSearchTip list={search.searchTipList} obj={wrapObj} cb={wrapCb} />
        {/* 历史搜索 */}
        <section></section>
        {/* 热门推荐 */}
        <section>
            <p>热门推荐</p>
            <div>{search.hotList.map(item => {
                return <span key={item}>{item}</span>
            })}</div>
        </section>
    </div>);
}

export default Search;