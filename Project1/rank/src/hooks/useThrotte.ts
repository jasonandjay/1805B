import React from 'react'

function useThrottle<CallbackArguments extends any[]>(fn: (...args: CallbackArguments)=>void, delay = 500){
    let start = React.useRef(+new Date());
    return React.useCallback(function(...args: CallbackArguments){
        let now = +new Date();
        console.log('now...', now, now - start.current);
        if (now - start.current > delay){
            fn(...args);
            start.current = now;
        }
    }, [])
}

export default useThrottle;