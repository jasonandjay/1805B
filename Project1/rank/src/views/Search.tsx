import React, { useEffect, useState, memo, useMemo, useCallback } from 'react';
import useStore from '../context/useStore';
import { useObserver } from 'mobx-react-lite';
import SearchTip from '../components/SearchTip';
import useThrottle from '../hooks/useThrotte';

const WrapSearchTip = memo(SearchTip);
const Search: React.FC = () => {
    let { search } = useStore();
    let [searchText, setSearchText] = useState<string>('');
    let [count, setCount] = useState<string>('');

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

    let searchTip = useThrottle(search.getSearchTips)
    useEffect(() => {
        // 获取搜索关键词提示
        searchTip(searchText);
    }, [searchText])

    function getSearchResult(){
        search.getSearchResult(searchText)
    }
    console.log('search...', search);

    // useMemo包裹属性，当deps修改的时候recompute
    let wrapObj = useMemo(()=>{return {}}, []);
    let wrapCb = useCallback(()=>{
        return ()=>{}
    }, []);
    return useObserver(() => <div>
        {/* 搜索框 */}
        <section>
            <input type="text" placeholder="请输入你要搜索的内容" value={searchText} onChange={e => setSearchText(e.target.value)} />
            <button onClick={getSearchResult}>搜索</button>
        </section>
        {/* 搜索结果 */}
        <section>{
            search.searchRankList.map(item => {
                return <li key={item.id}>
                    <img src={item.image} alt="" />
                    <span>{item.name}</span>
                </li>
            })}</section>
        {/* 关键词提示 */}
        <section>{
            search.searchTipList.map(item => {
                return <p key={item}>{item}</p>
            })}</section>
        <WrapSearchTip list={search.searchTipList} obj={wrapObj} cb={wrapCb}/>
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