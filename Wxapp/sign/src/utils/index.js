export function throttle(func, delay=300){
    let start = +new Date();
    return function(){
        let now = +new Date();
        if (now - start > delay){
            func(...arguments);
            start = now;
        }
    }
}