import React,{useEffect, useState, useRef} from 'react'
import { IMessageItem } from '../../utils/interface';
import { getMessageList } from '../../services'
import styles from './Message.module.scss'
import BScroll from '@better-scroll/core'
import Pulldown from '@better-scroll/pull-down'
import { BScrollConstructor } from '@better-scroll/core/dist/types/BScroll';
import {PluginAPI} from '@better-scroll/pull-down/dist/types'

BScroll.use(Pulldown)
let scroll: BScrollConstructor & PluginAPI;

const Mine: React.FC = ()=>{
    let [list, setList] = useState<IMessageItem []>([]);
    let [page, setPage] = useState(1);
    let [hasMore, setHasMore] = useState(true);
    let ele = useRef();

    //请求锁，防止同一请求重复触发
    let getingList = false;

    useEffect(()=>{
        // eslint-disable-next-line react-hooks/exhaustive-deps
        scroll = new BScroll('#wrap', {
            pullDownRefresh: true
        })
        scroll.on('pullingDown', ()=>{
            setPage(1);
            getList();
        })
    }, []);

    useEffect(()=>{
        getList()
    }, [page]);

    async function getList(){
        if (getingList){
            return;
        }
        getingList = true;
        let res = await getMessageList(page);
        getingList = false;
        scroll.finishPullDown();
        if(res){
            setHasMore(res.data.pageNo < res.data.totalPage)
            if (page === 1){
                setList(res.data.dataList as IMessageItem[])
            }else{
                setList([...list, ...res.data.dataList]);
            }
        }
    }

    function scrollEvent(e: React.UIEvent<HTMLDivElement>){
        if (!hasMore || getingList){
            return;
        }
        let wrap = e.currentTarget;
        if (wrap.clientHeight + wrap.scrollTop > (ele.current as HTMLElement).clientHeight - 10){
            setPage(page+1);
        }
    }

    return <div className={styles.wrap} id="wrap" onScroll={scrollEvent}>
        <ul ref={ele}>{list.map(item=>{
            return <li key={item.id} className="li">
                <img src="" alt="" className={styles.icon}/>
                <p className={styles.content}>
                    <span>排名更新：{item.title}</span>
                    <span>{item.sendDate}</span>
                </p>
            </li>
        })}</ul>
    </div>
}

export default Mine;