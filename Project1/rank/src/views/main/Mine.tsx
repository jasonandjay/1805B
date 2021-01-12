import React, { useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../context/useStore';

const Mine: React.FC = () => {
    let { mine } = useStore();

    useEffect(() => {
        // let timer = setInterval(()=>{
        //     mine.setInfo( +new Date())
        //     console.log(mine.info);
        // }, 1000);
        // return ()=>{
        //     window.clearInterval(timer);
        // }
        mine.getInfo()
    }, []);

    return useObserver(()=><div>
        <p>我的页面{JSON.stringify(mine.info)}</p>
        {/* <button onClick={() => mine.setInfo(+new Date())}>修改info</button> */}
    </div>)
}

export default Mine;