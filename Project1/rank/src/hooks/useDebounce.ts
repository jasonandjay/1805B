import React from 'react'

function useDebounce<CallbackArguments extends any[]>(fn: (...args: CallbackArguments)=>void, delay = 500){
    let timer = React.useRef(0);
    return React.useCallback(function(...args: CallbackArguments){
        window.clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            fn(...args);
        }, delay) as unknown as number;
    }, [])
}

export default useDebounce;