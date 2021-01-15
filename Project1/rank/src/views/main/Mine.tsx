import React, {useState, useEffect } from 'react'
import { useObserver } from 'mobx-react-lite'
import useStore from '../../context/useStore';

const Mine: React.FC = () => {
    let { mine } = useStore();
    let [phone, setPhone] = useState<string>();
    let [code, setCode] = useState<string>();

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

    async function sendCode(){
        console.log('phone...', phone);
        if (/\d{11}/.test(phone)){
           let result = await mine.sendCode(phone);
        //    if (result){
               
        //    }
        }
    }

    return useObserver(()=><div>
        <p>我的页面{JSON.stringify(mine.info)}</p>
        {/* <button onClick={() => mine.setInfo(+new Date())}>修改info</button> */}
        <input type="number" placeholder="请输入您的手机号" value={phone} onChange={e=>setPhone(e.target.value)}/>
        <div>
            <input type="number" maxLength={6} placeholder="请输入手机号验证码"  value={code} onChange={e=>setCode(e.target.value)}/> 
            <button onClick={sendCode}>发送验证码</button>
        </div>
    </div>)
}

export default Mine;