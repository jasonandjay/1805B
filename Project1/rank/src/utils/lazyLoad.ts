// 防抖
function debounce(fn, delay=500){
    let timer:number = 0;
    return function(){
        window.clearTimeout(timer);
        timer = setTimeout(()=>{
            fn();   
        }, delay) as never as number;
    }
}

function LazyLoad(ele?: HTMLElement){
    this.ele = ele;
    var handle = debounce(()=>{
        let imgList = this.getImgList();
        imgList.forEach(item=>{
            let isIntoView = this.isIntoView(item);
            if (isIntoView){
                if (!this.isLoad(item)){
                    item.src = item.dataset.src;
                }
            }
        })
    });
    if (ele){
        ele.addEventListener('scroll', handle);
    }else{
        window.addEventListener('scroll', handle);
    }
    handle();
}
LazyLoad.prototype.getImgList = function(){
    if (this.ele){
        return [...this.ele.querySelectorAll('img[data-src]')];
    }else{
        return [...document.querySelectorAll('img[data-src]')];
    }
}
LazyLoad.prototype.isIntoView = function(ele: HTMLElement){
    let client = ele.getBoundingClientRect();
    return !(client.top > window.innerHeight || client.bottom < 0 || client.right < 0 || client.left > window.innerWidth)
}
LazyLoad.prototype.isLoad = function(ele: HTMLImageElement){
    return encodeURIComponent(decodeURIComponent(ele.src)) === encodeURIComponent(ele.dataset.src);
}

export default LazyLoad;