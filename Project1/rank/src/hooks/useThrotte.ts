import React from 'react'

const useThrottle =  <T>(fn: (T)=>void, delay=500)=>{
    let start = +new Date();
    return React.useCallback((T)=>function(){
        let now = +new Date();
        console.log('now...', now);
        if (now - start > delay){
            fn(T);
            start = now;
        }
    }, [])
}

export default useThrottle;