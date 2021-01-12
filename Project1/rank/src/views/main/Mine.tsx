import React, {useContext, useEffect} from 'react'
import StoreContext from '../../context/StoreContext'
import {useObserver} from 'mobx-react-lite'

const Mine: React.FC = ()=>{
    let store = useContext(StoreContext);

    useEffect(()=>{
        let timer = setInterval(()=>{
            store.mine.setInfo( +new Date())
            console.log(store.mine.info);
        }, 1000);
        return ()=>{
            window.clearInterval(timer);
        }
    }, []);

    // debugger;
    return useObserver(()=><p>我的页面{JSON.stringify(store.mine)}</p>)
}

export default Mine;